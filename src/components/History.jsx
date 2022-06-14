export default function History ({ history }) {
  return (
    <ul className="flex justify-center flex-wrap gap-5 my-5">
      {
        history.map(({ name, score }, index) => (
          <li key={ index } className="py-2 px-4 bg-secondary border-2 border-tertiary rounded text-paragraph text-center text-lg">
            <p className="text-xl font-medium">{ name }</p>
            <p className="">{ score } points</p>
          </li>
        ))
      }
    </ul>
  )
}
