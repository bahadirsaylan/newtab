import { useState } from "preact/hooks"
import clsx from "clsx"
import { Search } from "preact-feather"
import { CircularButton } from "./Button"

interface IProps extends preact.JSX.HTMLAttributes<HTMLInputElement> {
  className?: string
  handleSubmit: (searchQuery: string) => void
}

function SearchBar({ className, handleSubmit, ...props }: IProps) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <form
      class={clsx(
        "flex items-center max-w-lg mx-auto",
        "px-2 py-1.5 w-full rounded-full border border-gray-400/60",
        "bg-white/70 backdrop-blur",
        "dark:bg-gray-800 dark:text-gary-300",
        "focus-within:ring-2 ring-gray-300/40 dark:ring-gray-500/40",
        "shadow focus-within:shadow-lg transition-shadow",
        "group"
      )}
      onSubmit={(e) => {
        e.preventDefault()
        searchQuery && handleSubmit(searchQuery)
      }}
    >
      <CircularButton>
        <img
          class="w-8"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
        />
      </CircularButton>
      <input
        placeholder="Search..."
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.currentTarget.value)}
        {...props}
        class={clsx(
          "rounded-lg w-full p-2.5",
          "bg-transparent focus:outline-none",
          "placeholder:text-gray-500 dark:placeholder:text-gray-300",
          className,
          props.class
        )}
      />
      <CircularButton disabled={!searchQuery} type="submit">
        <Search />
      </CircularButton>
    </form>
  )
}

export default SearchBar
