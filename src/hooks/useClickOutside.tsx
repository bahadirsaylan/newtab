import React, { useEffect, useRef } from "preact/hooks"

function useClickOutside(callbackFn: () => void): preact.RefObject<any> {
  let domNode = useRef<any>()

  useEffect(() => {
    let handler = (event: MouseEvent) => {
      if (!domNode.current?.contains(event.target)) {
        callbackFn()
      }
    }
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return domNode
}

export default useClickOutside
