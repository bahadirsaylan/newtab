import clsx from "clsx"
import { Plus, X } from "preact-feather"
import { useState } from "preact/hooks"
import {
  addCategory,
  deleteCategory,
  useFavStore,
} from "../../store/favourites"
import { parseForm } from "../../utils/form"
import { CircularButton } from "../Button"
import Input from "../Input"

interface IProps {
  editMode: boolean
  className?: string
}

function Categories({ editMode, className }: IProps) {
  const [showForm, setShowForm] = useState(false)

  const categories = useFavStore.categories()[0]
  const [currentCategory, setCurrentCategory] = useFavStore.currentCategory()

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const { category } = parseForm<{ category: string }>(e.currentTarget)
    addCategory(category)
    setShowForm(false)
    e.currentTarget.reset()
  }

  return (
    <ul
      class={clsx(
        "w-full flex flex-wrap items-center gap-4 font-bold text-sm",
        className
      )}
    >
      {categories.map((category) => (
        <li
          class={clsx(
            "p-1 relative",
            currentCategory === category.id
              ? "border-b-2 border-gray-200 text-gray-900"
              : "text-gray-700"
          )}
        >
          <button onClick={() => setCurrentCategory(category.id)}>
            {category.name}
          </button>
          {editMode && (
            <CircularButton
              onClick={() => deleteCategory(category.id)}
              className="absolute -right-2 -top-2 !p-0.5 !bg-red-200/80"
            >
              <X class="text-red-500" size={16} />
            </CircularButton>
          )}
        </li>
      ))}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <Input
            name="category"
            autoFocus={showForm}
            className="w-40 "
            placeholder="Category Name"
          />
        </form>
      )}

      <CircularButton
        className="!p-1 !rounded-lg"
        onClick={() => setShowForm((curr) => !curr)}
      >
        {showForm ? <X size={20} /> : <Plus size={20} />}
      </CircularButton>
    </ul>
  )
}

export default Categories
