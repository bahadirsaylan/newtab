import clsx from "clsx"
import { StateUpdater } from "preact/hooks"
import { useFavStore } from "../../store/favourites"
import { getFavicon } from "../../utils/url"
import Dropdown from "../Dropdown"

interface IProps extends preact.JSX.HTMLAttributes<HTMLInputElement> {
  className?: string
  searchQuery: string
  setSearchQuery: StateUpdater<string>
}

function SearchInput({
  searchQuery,
  setSearchQuery,
  className,
  ...props
}: IProps) {
  const sites = useFavStore.sites()[0]

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
      <ul class="py-2 bg-gray-100/95 rounded-b-lg shadow-xl backdrop-blur empty:hidden">
        {sites
          .filter((s) =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((s) => (
            <li>
              <a
                href={s.url}
                class="flex items-center gap-2 px-4 py-2 hover:bg-gray-400/20 transition-colors"
              >
                <img class="w-8 h-8" src={getFavicon(s.url)} />
                <span class="font-bold">{s.name}</span>
                <p class="text-gray-500">{s.url}</p>
              </a>
            </li>
          ))}
      </ul>
    </Dropdown>
  )
}

export default SearchInput
