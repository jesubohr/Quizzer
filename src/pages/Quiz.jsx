import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import useLocal from "@util/useLocal"
import getLevels from "@data/rounds"

const MAX_LEVEL = 5
const updateScore = (score, points) => score + Math.floor(points * Math.random())
const addClass = (element, className) => element.classList.add(className)
const removeClass = (element, className) => element.classList.remove(className)


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
      addClass(button, "bg-green-500")
      removeClass(nextButton.current, "disabled")
      addClass(nextButton.current, "active")

      setUserData({
        ...userData,
        score: updateScore(userData.score, level.points)
      })
    } else {
      addClass(button, "bg-red-500")
      removeClass(resultButton.current, "hidden")
      setUserData({ ...userData, completed: true })
    }

    if (currentLevel + 1 === MAX_LEVEL) {
      setUserData({ ...userData, completed: true })
      removeClass(resultButton.current, "hidden")
      addClass(nextButton.current, "hidden")
    }
  }

  function deactivateOptions (clickedButton) {
    const options = Array.from(optionsRef.current.children)
    options.forEach(({ firstChild }) => {
      if (firstChild !== clickedButton) {
        addClass(firstChild, "disabled")
      }
    })
  }

  function cleanRound () {
    const options = Array.from(optionsRef.current.children)
    options.forEach(({ firstChild }) => {
      removeClass(firstChild, "bg-green-500")
      removeClass(firstChild, "bg-red-500")
      removeClass(firstChild, "disabled")
    })
    addClass(nextButton.current, "disabled")
  }

  function handleNextLevel () {
    setCurrentLevel(currentLevel + 1)
    cleanRound()
  }

  function handleResult () {
    navigate("/result")
  }

  useEffect(() => {
    if (currentLevel !== MAX_LEVEL) {
      setLevel(getLevels(currentLevel))
    }
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
        className="hidden active self-center py-2 px-4 w-full max-w-md border-2"
      >Go to Results</button>
    </section>
  )
}
