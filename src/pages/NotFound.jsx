import Section from "@comp/Section"
import Title from "@comp/Title"
import Button from "@comp/Button"

export default function NotFound () {
  return (
    <Section>
      <Title>404</Title>
      <Title.Sub>Page not found</Title.Sub>
      <img className="my-8" src="https://img.icons8.com/pastel-glyph/128/272343/page-not-found--v2.png"/>
      <Button to="/">Go to home</Button>
    </Section>
  )
}
