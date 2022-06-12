import { NavLink } from "react-router-dom"

export default function Home () {
  return (
    <section>
      <h1>Home</h1>
      <p>
        <NavLink to="/quiz">Quiz</NavLink>
      </p>
    </section>
  )
}
