import { useLocalStorage } from "../hooks/useLocalStorage"
import { useEffect } from "react"

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("dark-mode")
  useEffect(() => {
    value
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode")
  }, [value])
  return [value, setValue]
}
