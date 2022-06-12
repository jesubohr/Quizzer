import { Link } from "react-router-dom"
import useLocal from "@util/useLocal"

export default function Result () {
  const [score, setScore] = useLocal("user-score", 0)

  return (
    <section>
      <h1>Result</h1>
      {
        score > 0
          ? (
            <p>You scored { score } points</p>
          ) : (
            <p>You have 0 points</p>
          )
      }
      <Link to="/" className="py-2 px-4">
          Go to Home
      </Link>
    </section>
  )
}
