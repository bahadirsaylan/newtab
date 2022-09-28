import { SearchProvider as SearchProviderType, Store } from "../../store/search"
import { getFavicon } from "../../utils/url"
import { CircularButton } from "../Button"
import Dropdown from "../Dropdown"

interface IProps {
  providers: Store["providers"]
  currentProvider: SearchProviderType
  setCurrentProvider: (id: string) => void
}

function SearchProvider({
  providers,
  currentProvider,
  setCurrentProvider,
}: IProps) {
  return (
    <Dropdown
      trigger={(handleClick) => (
        <CircularButton
          onClick={() => handleClick()}
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
      className="-top-1.5 -left-1.5 z-10"
    >
      <ul class="flex gap-2 bg-gray-200 rounded-full p-1.5">
        {Object.entries(providers).map(([id, provider]) => (
          <CircularButton
            key={id}
            className="p-1"
            onClick={() => setCurrentProvider(id)}
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
  )
}

export default SearchProvider
