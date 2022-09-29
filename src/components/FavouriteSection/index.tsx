import clsx from "clsx"
import { Edit2, Plus, X } from "preact-feather"
import { useState } from "preact/hooks"
import { Category, deleteSite, useFavStore } from "../../store/favourites"
import { CircularButton } from "../Button"
import SiteTile from "../SiteTile"
import TileList from "../TileList"
import AddSiteModal from "./AddSiteModal"
import Categories from "./Categories"

function FavouriteSection() {
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [dragSite, setDragSite] = useState(-1)

  const [sites, setSites] = useFavStore.sites()
  const currentCategory = useFavStore.currentCategory()[0]

  const handleSiteDrop = (idx: number) => {
    setSites((curr) => {
      const site = curr[dragSite]
      curr.splice(dragSite, 1)
      curr.splice(idx, 0, site)
      return curr
    })
  }

  const handleCategoryDrop = (categoryId: Category["id"]) => {
    setSites((curr) => {
      curr[dragSite].categoryId = categoryId
      return curr
    })
  }

  return (
    <>
      <TileList className="mx-auto shadow">
        <Categories
          onDrop={handleCategoryDrop}
          editMode={editMode}
          className="-mt-1"
        />
        {sites.map((site, idx) =>
          site.categoryId !== currentCategory ? null : (
            <li
              key={site.id}
              class="relative"
              draggable
              onDragStart={() => setDragSite(idx)}
              onDrop={() => handleSiteDrop(idx)}
              onDragOver={(e) => e.preventDefault()}
            >
              <SiteTile {...site} />
              {editMode && (
                <CircularButton
                  onClick={() => deleteSite(site.id)}
                  className="absolute -top-2 -right-2 !p-1.5 !bg-red-200/80"
                  title={`Delete ${site.name}`}
                >
                  <X class="text-red-500" size={16} />
                </CircularButton>
              )}
            </li>
          )
        )}
        <button
          class={clsx(
            "p-4 rounded-xl focus:ouline-none",
            "bg-white/20 text-gray-800/40",
            "hover:bg-white/30 transition-colors"
          )}
          onClick={() => setShowModal(true)}
          title="Add Site"
        >
          <Plus size={42} />
        </button>
        <CircularButton
          className="absolute right-0 top-0 m-2"
          onClick={() => setEditMode((curr) => !curr)}
          title={editMode ? "Exit edit mode" : "Edit Mode"}
        >
          {editMode ? <X size={16} /> : <Edit2 size={16} />}
        </CircularButton>
      </TileList>
      <AddSiteModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

export default FavouriteSection
