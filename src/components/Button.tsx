import clsx from "clsx"

interface IProps extends preact.JSX.HTMLAttributes<HTMLButtonElement> {
  className?: string
}

function Button({ className, ...props }: IProps) {
  return (
    <button
      {...props}
      class={clsx(
        "flex item-center justify-center",
        "px-4 py-2 rounded-lg",
        "bg-gray-800",
        "font-bold text-white",
        "disabled:opacity-60 hover:opacity-95",
        "shadow hover:shadow-lg transition-all",
        className
      )}
    >
      {props.children}
    </button>
  )
}

export function CircularButton({ className, ...props }: IProps) {
  return (
    <button
      {...props}
      class={clsx(
        "rounded-full p-2",
        "bg-white/50 dark:bg-gray-800/50",
        "text-gray-700 dark:text-gray-200",
        "disabled:opacity-60 hover:opacity-80",
        "shadow hover:shadow-lg transition-all",
        className
      )}
    >
      {props.children}
    </button>
  )
}

export default Button
