export default function Input ({ type = "text", refr, id, label, className, onChange, minLength, pattern, error }) {
  return (
    <label
      htmlFor={ id }
      className={ "relative flex flex-col w-full max-w-sm text-paragraph text-lg" + (className ? ` ${className}` : "") }
    >
      <input
        type={ type }
        ref={ refr }
        id={ id }
        className="peer py-2 px-4 border-2 focus:outline-primary caret-primary rounded invalid:text-red-500 invalid:caret-red-500 focus:invalid:outline-red-500 placeholder:invisible"
        onChange={ onChange }
        placeholder={ label }
        minLength={ minLength }
        pattern={ pattern }
        required
      />
      <span className="absolute top-2.5 left-4 px-1 bg-white text-gray-400 transition-all">{ label }</span>
      <p className="mt-2 block text-red-500 text-base">{ error }</p>
    </label>
  )
}
