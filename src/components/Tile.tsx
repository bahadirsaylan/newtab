import clsx from "clsx"

interface IProps {
  children: preact.ComponentChild
  className?: string
}

function Tile({ children, className }: IProps) {
  return (
    <div
      class={clsx(
        "rounded-xl bg-gray-200 p-4",
        "shadow hover:shadow-lg transition-shadow",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Tile
