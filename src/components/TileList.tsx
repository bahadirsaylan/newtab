import clsx from "clsx"

interface IProps {
  children: preact.ComponentChild
  className?: string
}

function TileList({ children, className }: IProps) {
  return (
    <ul
      class={clsx(
        "flex flex-wrap items-start gap-4",
        "bg-gray-200/40 backdrop-blur-lg",
        "p-4 rounded-2xl max-w-2xl",
        className
      )}
    >
      {children}
    </ul>
  )
}

export default TileList
