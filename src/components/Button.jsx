import { useNavigate } from "react-router-dom"

export default function Button ({ children, refr, to, onClick, className }) {
  const navigate = useNavigate()

  function handleClick (e) {
    if (onClick) onClick(e)
    if (to) navigate(to)
  }

  return (
    <button
      ref={ refr }
      type="button"
      role={ to && "link" }
      className={
        "mt-5 py-[18px] px-8 w-fit bg-primary rounded text-title text-lg font-medium" +
        (className ? ` ${className}` : "")
      }
      onClick={ handleClick }
    >{ children }</button>
  )
}
