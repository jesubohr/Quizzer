export default function Title ({ children }) {
  return (
    <h1 className="mb-3 text-title text-4xl font-bold">
      { children }
    </h1>
  )
}

Title.Sub = function Sub ({ children, className }) {
  return (
    <h2 className={
      "text-paragraph text-center text-xl" +
      (className ? ` ${className}` : "")
    }>
      { children }
    </h2>
  )
}
