import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import useLocal from "@util/useLocal"
import getLevels from "@data/rounds"

const LEVELS = getLevels()

export default function Quiz () {
  const [score, setScore] = useLocal("user-score", 0)
  const [currentLevel, setCurrentLevel] = useState(0)
  const [level, setLevel] = useState(LEVELS[currentLevel])

  const navigate = useNavigate()
  const optionsRef = useRef(null)
  const nextButton = useRef(null)

  function verifyAnswer (button, choice) {
    if (choice === level.answer) {
      button.classList.add("bg-green-500")
      nextButton.current.classList.remove("disabled")
      nextButton.current.classList.add("active")
      setScore(score + level.points)
    } else {
      button.classList.add("bg-red-500")
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

  useEffect(() => {
    if (currentLevel === LEVELS.length) { navigate("/result") }
    setLevel(LEVELS[currentLevel])
  }, [currentLevel])

  return (
    <section className="flex flex-col gap-10 p-10">
      <p>Question { currentLevel + 1 } of { LEVELS.length }</p>
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
    </section>
  )
}
