import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import useLocal from "@util/useLocal"
import getLevels from "@data/rounds"

import Section from "@comp/Section"
import Title from "@comp/Title"
import Options from "@comp/Options"
import Button from "@comp/Button"

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
      addClass(button, "border-green-500")
      removeClass(nextButton.current, "disabled")

      setUserData({
        ...userData,
        score: updateScore(userData.score, level.points)
      })
    } else {
      addClass(button, "bg-red-500")
      addClass(button, "border-red-500")
      removeClass(resultButton.current, "hidden")
      setUserData({ ...userData, completed: true })
    }

    if (currentLevel + 1 === MAX_LEVEL) {
      setUserData({ ...userData, completed: true })
      removeClass(resultButton.current, "hidden")
      addClass(nextButton.current, "hidden")
    }
  }

  function deactivateOptions (clicked) {
    const options = Array.from(optionsRef.current.children)
    options.forEach(option => {
      if (option !== clicked) {
        addClass(option, "disabled")
      }
    })
  }

  function cleanRound () {
    const options = Array.from(optionsRef.current.children)
    options.forEach(option => {
      removeClass(option, "bg-green-500")
      removeClass(option, "border-green-500")
      removeClass(option, "bg-red-500")
      removeClass(option, "border-red-500")
      removeClass(option, "disabled")
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
    <Section>
      <p className="text-title text-lg">Question { currentLevel + 1 } of { MAX_LEVEL }</p>
      <Title.Sub className="font-semibold">{ level.question }</Title.Sub>
      <Options refr={ optionsRef }>
        {
          level.options.map((option, index) => (
            <Options.Option
              key={ index }
              option={ option }
              onClick={
                ({ target }) => {
                  verifyAnswer(target, option)
                  deactivateOptions(target)
                }
              }
            />
          ))
        }
      </Options>
      <Button
        refr={ nextButton }
        onClick={ handleNextLevel }
        className="disabled"
      >Next</Button>
      <Button
        refr={ resultButton }
        onClick={ handleResult }
        className="hidden"
      >Go to Results</Button>
    </Section>
  )
}
