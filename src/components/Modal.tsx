import clsx from "clsx"
import { X } from "preact-feather"
import { CircularButton } from "./Button"

interface IProps {
  heading?: string
  show: boolean
  onClose: () => void
  children: preact.ComponentChild
  className?: string
}

function Modal({ heading, show, onClose, children, className }: IProps) {
  return (
    <div
      onClick={onClose}
      class={clsx(
        "!m-0 fixed inset-0 z-10",
        "items-center justify-center",
        "bg-gray-800/40",
        show ? "flex" : "hidden"
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        class={clsx("max-w-xl rounded-xl p-4 bg-gray-300", className)}
      >
        <div class="flex gap-4 justify-between items-center mb-2">
          <h3 class="text-lg font-bold">{heading}</h3>
          <CircularButton className="p-1.5" onClick={onClose} title="Close">
            <X />
          </CircularButton>
        </div>
        <div class="mt-2">{children}</div>
      </div>
    </div>
  )
}

export default Modal
