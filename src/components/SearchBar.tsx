import { useState } from "preact/hooks"
import clsx from "clsx"
import { Search } from "preact-feather"

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
        "px-4 py-1.5 w-full rounded-full border border-gray-400/60",
        "bg-white/60 backdrop-blur",
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
      <button class={clsx("text-gray-500", searchQuery && "text-gray-700")}>
        <Search />
      </button>
    </form>
  )
}

export default SearchBar
