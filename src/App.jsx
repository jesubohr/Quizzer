import { useEffect } from "react"
import { Outlet } from "react-router-dom"

export default function App () {
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      //document.documentElement.classList.add('dark');
    }
  }, [])

  return (
    <>
      <Outlet />
    </>
  )
}
