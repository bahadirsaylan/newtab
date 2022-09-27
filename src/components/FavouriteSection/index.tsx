import clsx from "clsx"
import { Edit2, Plus, X } from "preact-feather"
import { useState } from "preact/hooks"
import {
  addCategory,
  addSite,
  deleteCategory,
  deleteSite,
  useStore,
} from "../../store"
import { parseForm } from "../../utils/form"
import { CircularButton } from "../Button"
import Input from "../Input"
import SiteTile from "../SiteTile"
import TileList from "../TileList"
import AddSiteModal from "./AddSiteModal"
import Categories from "./Categories"

interface IProps {}

function FavouriteSection({}: IProps) {
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const sites = useStore.sites()[0]
  const currentCategory = useStore.currentCategory()[0]

  return (
    <div>
      <TileList className="relative mx-auto shadow">
        <Categories editMode={editMode} className="-mt-1" />
        {sites
          .filter((site) => site.categoryId === currentCategory)
          .map((site) => (
            <div class="relative">
              <SiteTile {...site} />
              {editMode && (
                <CircularButton
                  onClick={() => deleteSite(site.id)}
                  className="absolute -top-2 -right-2 !p-1.5 !bg-red-200/80"
                >
                  <X class="text-red-500" size={16} />
                </CircularButton>
              )}
            </div>
          ))}
        <button
          class={clsx(
            "p-4 rounded-xl focus:ouline-none",
            "bg-white/20 text-gray-800/40",
            "hover:bg-white/30 transition-colors"
          )}
          onClick={() => setShowModal(true)}
        >
          <Plus size={36} />
        </button>
        <CircularButton
          className="absolute right-0 top-0 m-2"
          onClick={() => setEditMode((curr) => !curr)}
        >
          {editMode ? <X size={16} /> : <Edit2 size={16} />}
        </CircularButton>
      </TileList>
      <AddSiteModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default FavouriteSection
