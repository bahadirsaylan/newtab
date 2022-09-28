import clsx from "clsx"
import { useEffect, useState } from "preact/hooks"

interface IProps {
  className?: string
}
interface IState {
  hours: Number
  minutes: Number
  meridiem: "AM" | "PM"
}

function DateTime({ className }: IProps) {
  const [time, setTime] = useState<IState>({
    hours: 0,
    minutes: 0,
    meridiem: "AM",
  })

  const setCurrentTime = () => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    if (hours > 12) setTime({ hours: hours - 12, minutes, meridiem: "PM" })
    else setTime({ hours, minutes, meridiem: "AM" })
  }

  useEffect(() => {
    setCurrentTime()
    const timeInterval = setInterval(setCurrentTime, 60 * 1000)
    return () => clearInterval(timeInterval)
  }, [])

  return (
    <div class={clsx("text-center w-fit text-white", className)}>
      <div class="flex gap-2 items-end">
        <h2 class="text-6xl font-light">
          {(time.hours < 10 ? "0" + time.hours : time.hours) +
            ":" +
            (time.minutes < 10 ? "0" + time.minutes : time.minutes)}
        </h2>
        <span class="text-lg font-medium">{time.meridiem}</span>
      </div>
      <hr class="border border-gray-200 mt-2" />
      <span class="text-lg font-medium">{new Date().toDateString()}</span>
    </div>
  )
}

export default DateTime
