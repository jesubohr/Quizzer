import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import useLocal from "@util/useLocal"

export default function Result () {
  const [userHistory, setUserHistory] = useLocal("user-history", [])
  const [userData, setUserData] = useLocal("user-data", {})
  const [score, setScore] = useState(userData.score)

  useEffect(() => {
    //setUserHistory([...userHistory, userData])
  }, [])

  return (
    <section className="flex flex-col gap-5">
      <div>
        <h1>Results</h1>
        {
          score > 0
            ? <p>You have scored { score } points</p>
            : <p>You have 0 points</p>
        }
      </div>
      <div className="self-center">
        <h3 className="mb-3 text-2xl font-bold">History</h3>
        <ul className="flex flex-col gap-5">
          {
            userHistory.map(({ name, score }, index) => (
              <li key={ index }>
                <p className="text-lg font-medium">{ name }</p>
                <p className="font-light">{ score } points</p>
              </li>
            ))
          }
        </ul>
      </div>
      <Link to="/" className="self-center py-2 px-4 border-2">
        Start again
      </Link>
    </section>
  )
}
