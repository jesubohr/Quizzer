export default function Options ({ refr, children }) {
  return (
    <ul
      ref={ refr }
      className="grid grid-cols-2 gap-4 my-10 w-full max-w-2xl text-lg">
      { children }
    </ul>
  )
}

Options.Option = function Option ({ option, onClick }) {
  return (
    <li
      className="flex justify-center items-center py-3 px-2 w-full border-2 rounded text-center break-words cursor-pointer"
      onClick={ onClick }
    >{ option }</li>
  )
}
