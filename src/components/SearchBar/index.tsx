import { useState } from "preact/hooks"
import clsx from "clsx"
import { Search } from "preact-feather"
import { CircularButton } from "../Button"
import { useSettingStore } from "../../store/settings"
import SearchInput from "./SearchInput"
import SearchProvider from "./SearchProvider"

interface IProps extends preact.JSX.HTMLAttributes<HTMLInputElement> {
  className?: string
}

function SearchBar({ className, ...props }: IProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const providers = useSettingStore.providers()[0]
  const [currentProviderId, setCurrentProviderId] =
    useSettingStore.currentProviderId()

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
        "focus-within:ring-2 ring-gray-300/40",
        "shadow focus-within:shadow-lg transition-shadow",
        "dark:bg-gray-700/70 dark:text-gray-300 dark:ring-gray-500/40 dark:border-gray-600/60",
        "group relative z-20"
      )}
      onSubmit={(e) => {
        e.preventDefault()
        searchQuery && handleSubmit(searchQuery)
      }}
    >
      <SearchProvider
        providers={providers}
        currentProvider={currentProvider}
        setCurrentProvider={setCurrentProviderId}
      />
      <div class="w-full">
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          placeholder={`Search with ${currentProvider.name}...`}
        />
      </div>
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
