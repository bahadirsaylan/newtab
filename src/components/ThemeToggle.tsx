import clsx from "clsx"
import { Moon, Sun } from "preact-feather"
import { useSettingStore } from "../store/settings"
import { CircularButton } from "./Button"

function ThemeToggle({ className }: { className?: string }) {
  const [darkMode, setDarkMode] = useSettingStore.darkMode()

  return (
    <CircularButton
      className={clsx("!bg-white/70 dark:!bg-gray-700/70", className)}
      onClick={() => setDarkMode((curr) => !curr)}
      title={"Toggle " + (darkMode ? "light mode" : "dark mode")}
    >
      {darkMode ? <Sun /> : <Moon />}
    </CircularButton>
  )
}

export default ThemeToggle
