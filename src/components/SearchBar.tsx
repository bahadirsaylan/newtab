import { useState } from "preact/hooks"
import clsx from "clsx"
import { Search } from "preact-feather"
import { CircularButton } from "./Button"
import Dropdown from "./Dropdown"
import { getFavicon } from "../utils/url"
import { useSearchStore } from "../store/search"

interface IProps extends preact.JSX.HTMLAttributes<HTMLInputElement> {
  className?: string
}

function SearchBar({ className, ...props }: IProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const providers = useSearchStore.providers()[0]
  const [currentProviderId, setCurrentProviderId] =
    useSearchStore.currentProviderId()

  const currentProvider = providers[currentProviderId]

  const handleSubmit = (searchQuery: string) => {
    window.location.href = currentProvider.url + searchQuery
  }

  return (
    <form
      class={clsx(
        "flex items-center max-w-lg mx-auto",
        "px-1.5 py-1 w-full rounded-full border border-gray-400/60",
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
      <Dropdown
        trigger={(handleClick) => (
          <CircularButton
            onClick={handleClick}
            className="!p-1"
            type="button"
            title={currentProvider.name}
          >
            <img
              class="w-10 rounded-full"
              src={getFavicon(currentProvider.url)}
              alt={currentProvider.name}
            />
          </CircularButton>
        )}
        className="-top-1.5 -left-1.5"
      >
        <ul class="flex gap-2 bg-gray-200 rounded-full p-1.5">
          {Object.entries(providers).map(([id, provider]) => (
            <CircularButton
              key={id}
              className="p-1"
              onClick={() => setCurrentProviderId(id)}
              title={provider.name}
            >
              <img
                class="min-w-[32px] h-[32px] rounded-full"
                src={getFavicon(provider.url)}
                alt={provider.name}
              />
            </CircularButton>
          ))}
        </ul>
      </Dropdown>

      <input
        placeholder={`Search with ${currentProvider.name}...`}
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
      <CircularButton
        disabled={!searchQuery}
        className="w-11"
        type="submit"
        title="Search"
      >
        <Search />
      </CircularButton>
    </form>
  )
}

export default SearchBar
