export default function History ({ history, setHistory }) {

  const handleRemove = (index) => {
    setHistory(history.filter((_, i) => i !== index))
  }

  return (
    <ul className="flex justify-center flex-wrap gap-5 mt-7 mb-5">
      {
        history
          .sort((a, b) => a.score - b.score)
          .map(({ name, score }, index) => (
            <li key={ index } className="relative py-2 px-4 bg-secondary border-2 border-tertiary rounded text-paragraph text-center text-lg">
              <p className="text-xl font-medium">{ name }</p>
              <p>{ score } points</p>
              <button
                className="absolute -top-3.5 -right-3.5 w-7 h-7 bg-white border-2 border-tertiary rounded-full text-base"
                onClick={ () => handleRemove(index) }
              >✖</button>
            </li>
          ))
      }
    </ul>
  )
}
