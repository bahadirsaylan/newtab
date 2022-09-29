import createStore from "teaful"
import { getItem, setItem } from "../utils/persist"

const STORE_KEY = "SEARCH_STORE_1"
const MAX_RECENT_SEARCHES = 100

export interface Store {
  recentSearches: string[]
}

const initiaState = getItem<Store>(STORE_KEY) || {
  recentSearches: [],
}

export const { useStore: useSearchStore, setStore } = createStore<Store>(
  initiaState,
  ({ store }) => setItem(STORE_KEY, store)
)

export const addRecentSearch = (query: string) =>
  setStore.recentSearches((curr) => [
    query,
    ...curr.slice(0, MAX_RECENT_SEARCHES - 1),
  ])
