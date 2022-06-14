import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import useLocal from "@util/useLocal"

import Section from "@comp/Section"
import Title from "@comp/Title"
import Input from "@comp/Input"
import Button from "@comp/Button"


export default function Home () {
  const [userData, setUserData] = useLocal("user-data", {})
  const inputRef = useRef()
  const navigate = useNavigate()

  function handleChange ({ target }) {
    const user = { ...userData, name: target.value }
    setUserData(user)
  }

  function handleSubmit () {
    if (inputRef.current.value.length < 3) {
      inputRef.current.focus()
      return
    }
    navigate("/quiz")
  }

  useEffect(() => {
    setUserData({ name: "", score: 0, completed: false })
  }, [])

  return (
    <Section>
      <Title>Quizzer</Title>
      <Title.Sub>Insert your preferred username and begin the game!</Title.Sub>
      <Section.Sub>
        <Input
          refr={ inputRef }
          id="username"
          label="Username"
          className="mt-12"
          onChange={ handleChange }
          minLength={ 3 }
          pattern="[a-zA-Z]+"
          error="Username must be at least 3 characters long and only contain letters"
        />
        <Button onClick={ handleSubmit }>Empezar Quiz</Button>
      </Section.Sub>
    </Section>
  )
}
