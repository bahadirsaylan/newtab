import createStore from "teaful"
import { getItem, setItem } from "../utils/persist"

const STORE_KEY = "SEARCH_STORE"

export type SearchProvider = {
  name: string
  url: string
}

export interface Store {
  providers: { [id: string]: SearchProvider }
  currentProviderId: string
  darkMode: boolean
}

const initiaState = getItem<Store>(STORE_KEY) || {
  providers: {
    "0": { name: "Google", url: "https://www.google.com/search?q=" },
    "1": { name: "DuckDuckGo", url: "https://duckduckgo.com/?q=" },
    "2": { name: "Yahoo", url: "https://search.yahoo.com/search?q=" },
    "3": { name: "Bing", url: "https://www.bing.com/search?q=" },
    "4": { name: "Ecosia", url: "https://www.ecosia.org/search?q=" },
  },
  currentProviderId: "0",
  darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
}

export const { useStore: useSettingStore } = createStore<Store>(
  initiaState,
  ({ store }) => setItem(STORE_KEY, store)
)
