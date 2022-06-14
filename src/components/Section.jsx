export default function Section ({ children, className }) {
  return (
    <section className={
      "flex flex-col items-center py-10 px-5 mx-auto w-full max-w-2xl" +
      (className ? ` ${className}` : "")
    }>
      { children }
    </section>
  )
}

Section.Sub = function Sub ({ children, className }) {
  return (
    <article className={
      "flex flex-col items-center w-full" +
      (className ? ` ${className}` : "")
    }>
      { children }
    </article>
  )
}
