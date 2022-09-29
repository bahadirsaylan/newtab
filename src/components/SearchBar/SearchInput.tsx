import clsx from "clsx"
import { Clock } from "preact-feather"
import { StateUpdater } from "preact/hooks"
import { useFavStore } from "../../store/favourites"
import { useSearchStore } from "../../store/searches"
import { SearchProvider } from "../../store/settings"
import { getFavicon } from "../../utils/url"
import Dropdown from "../Dropdown"

interface IProps extends preact.JSX.HTMLAttributes<HTMLInputElement> {
  className?: string
  searchQuery: string
  setSearchQuery: StateUpdater<string>
  provider: SearchProvider
}

function SearchInput({
  provider,
  searchQuery,
  setSearchQuery,
  className,
  ...props
}: IProps) {
  const recentSearch = useSearchStore.recentSearches()[0]
  const sites = useFavStore.sites()[0]

  const resultsStyles =
    "flex items-center gap-2 cursor-pointer px-4 py-2 hover:bg-gray-400/20 transition-colors"

  return (
    <Dropdown
      trigger={(handleTrigger) => (
        <input
          {...props}
          value={searchQuery}
          onInput={(e) => {
            setSearchQuery(e.currentTarget.value)
            if (e.currentTarget.value !== "") handleTrigger(true)
            else handleTrigger(false)
          }}
          class={clsx(
            "rounded-lg w-full p-2.5",
            "bg-transparent focus:outline-none",
            "placeholder:text-gray-500 dark:placeholder:text-gray-300",
            className,
            props.class
          )}
        />
      )}
      className="top-12 w-full"
    >
      <ul class="py-2 bg-gray-100 dark:bg-gray-700 rounded-b-lg shadow-xl backdrop-blur empty:hidden">
        {recentSearch
          .filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((s) => (
            <li>
              <a href={provider.url + s} class={resultsStyles}>
                <Clock class="opacity-20" size={20} />
                {s}
              </a>
            </li>
          ))}
        {sites
          .filter((s) =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((s) => (
            <li>
              <a href={s.url} class={resultsStyles}>
                <img class="w-10 h-10" src={getFavicon(s.url)} />
                <div>
                  <span class="font-bold">{s.name}</span>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    {s.url}
                  </p>
                </div>
              </a>
            </li>
          ))}
      </ul>
    </Dropdown>
  )
}

export default SearchInput
