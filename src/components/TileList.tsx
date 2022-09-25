import clsx from "clsx"
import { Plus } from "preact-feather"
import Tile from "./Tile"

interface IProps {
  children: preact.ComponentChild
  className?: string
}

function TileList({ children, className }: IProps) {
  return (
    <ul
      class={clsx(
        "flex flex-wrap items-center gap-4",
        "bg-gray-200/40 backdrop-blur-lg",
        "p-4 rounded-2xl max-w-2xl",
        className
      )}
    >
      {children}
      <button
        class={clsx(
          "p-4 rounded-xl focus:ouline-none",
          "bg-white/20 text-gray-800/40",
          "hover:bg-white/30 transition-colors"
        )}
      >
        <Plus size={36} />
      </button>
    </ul>
  )
}

export default TileList
