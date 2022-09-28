import clsx from "clsx"
import { useId } from "preact/hooks"

interface IProps extends preact.JSX.HTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
}

function Input({ className, label, ...props }: IProps) {
  const id = useId()

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={`input-${id}`}
          className="text-sm text-left block mb-1 font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
          {props.required && <span className="ml-1 opacity-70">*</span>}
        </label>
      )}

      <input
        id={`input-${id}`}
        class={clsx(
          "w-full px-3 py-2 rounded-lg",
          "bg-gray-100/60 dark:bg-gray-700/60 dark:text-gray-200",
          "focus:outline-none focus-visible:ring-2 ring-gray-500/40"
        )}
        {...props}
      />
    </div>
  )
}

export default Input
