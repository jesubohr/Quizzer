import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import useLocal from "@util/useLocal"
import getLevels from "@data/rounds"

const MAX_LEVEL = 5
export default function Quiz () {
  const [userData, setUserData] = useLocal("user-data", {})
  const [currentLevel, setCurrentLevel] = useState(0)
  const [level, setLevel] = useState(getLevels(currentLevel))

  const navigate = useNavigate()
  const optionsRef = useRef(null)
  const nextButton = useRef(null)
  const resultButton = useRef(null)

  function verifyAnswer (button, choice) {
    if (choice === level.answer) {
      button.classList.add("bg-green-500")
      nextButton.current.classList.remove("disabled")
      nextButton.current.classList.add("active")
      setUserData({ ...userData, score: userData.score + level.points })
    } else {
      button.classList.add("bg-red-500")
      resultButton.current.classList.remove("disabled")
      resultButton.current.classList.add("active")
    }
  }

  function deactivateOptions (clickedButton) {
    const options = Array.from(optionsRef.current.children)
    options.forEach(option => {
      if (option.firstChild !== clickedButton) {
        option.firstChild.classList.add("disabled")
      }
    })
  }

  function cleanRound () {
    const options = Array.from(optionsRef.current.children)
    options.forEach(option => {
      option.firstChild.classList.remove("bg-green-500")
      option.firstChild.classList.remove("bg-red-500")
      option.firstChild.classList.remove("disabled")
    })
    nextButton.current.classList.add("disabled")
  }

  function handleNextLevel () {
    setCurrentLevel(currentLevel + 1)
    cleanRound()
  }

  function handleResult () {
    navigate("/result")
  }

  useEffect(() => {
    if (currentLevel === MAX_LEVEL) { navigate("/result") }
    setLevel(getLevels(currentLevel))
  }, [currentLevel])

  return (
    <section className="flex flex-col gap-10 p-10">
      <p>Question { currentLevel + 1 } of { MAX_LEVEL }</p>
      <h1>{ level.question }</h1>
      <ul ref={ optionsRef } className="self-center grid grid-cols-2 w-full max-w-2xl gap-4">
        {
          level.options.map((option, index) => (
            <li key={ index }>
              <button onClick={
                ({ target }) => {
                  verifyAnswer(target, option)
                  deactivateOptions(target)
                }
              }
                className="py-2 px-4 w-full border-2"
              >{ option }</button>
            </li>
          ))
        }
      </ul>
      <button
        ref={ nextButton }
        type="button"
        onClick={ handleNextLevel }
        className="disabled self-center py-2 px-4 w-full max-w-md border-2"
      >Next</button>
      <button
        ref={ resultButton }
        type="button"
        onClick={ handleResult }
        className="disabled self-center py-2 px-4 w-full max-w-md border-2"
      >Go to Results</button>
    </section>
  )
}
