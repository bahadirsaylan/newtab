import createStore from "teaful"
import { getItem, setItem } from "../utils/persist"

const STORE_KEY = "FAVOURITES_STORE"

export type Site = {
  id: string
  name: string
  url: string
  categoryId: Category["id"]
}

export type Category = {
  id: string
  name: string
}

export interface Store {
  sites: Site[]
  categories: Category[]
  currentCategory: Category["id"]
}

const initiaState = getItem<Store>(STORE_KEY) || {
  sites: [],
  categories: [{ id: "0", name: "Favourites" }],
  currentCategory: "0",
}

export const { useStore: useFavStore, setStore } = createStore<Store>(
  initiaState,
  ({ store }) => setItem(STORE_KEY, store)
)

export const addSite = (
  site: { name: Site["name"]; url: Site["url"] },
  categoryId: Site["categoryId"]
) =>
  setStore.sites((curr) => [
    ...curr,
    {
      ...site,
      id: Date.now().toString(),
      categoryId: categoryId,
    },
  ])

export const deleteSite = (id: Site["id"]) =>
  setStore.sites((curr) => curr.filter((s) => s.id !== id))

export const addCategory = (name: Category["name"]) =>
  setStore.categories((curr) => [...curr, { name, id: Date.now().toString() }])

export const deleteCategory = (id: Category["id"]) =>
  setStore.categories((curr) => curr.filter((c) => c.id !== id))
