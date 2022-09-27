import clsx from "clsx"
import { useEffect, useState } from "preact/hooks"
import useClickOutside from "../hooks/useClickOutside"

interface IDropDownProps {
  trigger: (handleClick: () => void) => preact.ComponentChild
  children: preact.ComponentChild
  className?: string
  onOpen?: () => void
  onClose?: () => void
}

function Dropdown({
  trigger,
  children,
  className,
  onOpen,
  onClose,
}: IDropDownProps) {
  const [show, setShow] = useState(false)
  const dropdownRef = useClickOutside(() => setShow(false))

  useEffect(() => {
    show ? onOpen?.() : onClose?.()
  }, [show])

  return (
    <div ref={dropdownRef} class="relative">
      {trigger(() => setShow((prev) => !prev))}
      {show && (
        <div
          className={clsx("absolute top-0 min-w-44", className)}
          onClick={() => setShow(false)}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default Dropdown
