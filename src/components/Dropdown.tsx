import clsx from "clsx"
import { useEffect, useState } from "preact/hooks"
import useClickOutside from "../hooks/useClickOutside"

interface IDropDownProps {
  trigger: (handleClick: (bool?: boolean) => void) => preact.ComponentChild
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
      {trigger((bool?: boolean) =>
        setShow((prev) => (bool === undefined ? !prev : bool))
      )}
      {show && (
        <div class={clsx("absolute", className)} onClick={() => setShow(false)}>
          {children}
        </div>
      )}
    </div>
  )
}

export default Dropdown
