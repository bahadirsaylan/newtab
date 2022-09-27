import clsx from "clsx"
import { useEffect, useState } from "preact/hooks"

interface IProps {
  className?: string
}

function DateTime({ className }: IProps) {
  const [time, setTime] = useState("")

  const setCurrentTime = () => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    setTime(
      `${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }`
    )
  }

  useEffect(() => {
    setCurrentTime()
    const timeInterval = setInterval(setCurrentTime, 60 * 1000)
    return () => clearInterval(timeInterval)
  }, [])
  return (
    <div class={clsx("text-center w-fit text-white", className)}>
      <h2 class="text-6xl font-light">{time}</h2>
      <hr class="border border-gray-200 mt-2" />
      <span class="text-lg font-medium">{new Date().toDateString()}</span>
    </div>
  )
}

export default DateTime
