import { useEffect } from "react"
import useLocal from "@util/useLocal"
import { NavLink } from "react-router-dom"

export default function Home () {
  const [userData, setUserData] = useLocal("user-data", {})

  function handleChange ({ target }) {
    const user = { ...userData, name: target.value }
    setUserData(user)
  }

  useEffect(() => {
    setUserData({ name: "", score: 0, completed: false })
  }, [])

  return (
    <section className="flex flex-col gap-5">
      <h1>Quizzer</h1>
      <p>Ingresa tu nombre y presiona el botón para empezar</p>
      <label htmlFor="username" className="flex flex-col">
        Username
        <input
          type="text"
          className="py-2 px-4 max-w-xs border-2"
          id="username"
          onChange={ handleChange }
          placeholder="Insert your username"
        />
      </label>
      <NavLink to="/quiz" className="py-2 px-4 border-2 bg-blue-500">
        Empezar
      </NavLink>
    </section>
  )
}
