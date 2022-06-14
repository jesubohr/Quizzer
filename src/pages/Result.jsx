import { useEffect } from "react"
import useLocal from "@util/useLocal"

import Section from "@comp/Section"
import Title from "@comp/Title"
import History from "@comp/History"
import Button from "@comp/Button"

export default function Result () {
  const [userHistory, setUserHistory] = useLocal("user-history", [])
  const [userData, setUserData] = useLocal("user-data", {})
  const userScore = userData.score

  useEffect(() => {
    if (userData.completed) {
      setUserHistory([...userHistory, userData])
      setUserData({ name: "", score: 0, completed: false })
    }
  }, [])

  return (
    <Section>
      <Section.Sub>
        <Title>Results</Title>
        <Title.Sub>
          {
            userScore > 0
              ? `You have scored ${ userScore } points`
              : `You have 0 points`
          }
        </Title.Sub>
      </Section.Sub>
      <Section.Sub className="mt-10">
        <Title.Sub className="text-2xl font-semibold">History</Title.Sub>
        <History history={ userHistory } />
      </Section.Sub>
      <Button to="/">
        Start again
      </Button>
    </Section>
  )
}
