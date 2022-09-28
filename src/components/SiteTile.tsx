import clsx from "clsx"
import { getFavicon } from "../utils/url"

interface IProps {
  className?: string
  url: string
  name: string
}

function SiteTile({ className, name, url }: IProps) {
  return (
    <a href={url}>
      <div
        class={clsx(
          "rounded-xl bg-gray-200/40 dark:bg-gray-500/40 p-4",
          "shadow hover:shadow-lg transition-shadow",
          className
        )}
      >
        <img class="w-10 h-10" src={getFavicon(url)} alt={url} />
      </div>
      <p class="text-xs text-center mt-1 dark:text-gray-200">{name}</p>
    </a>
  )
}

export default SiteTile
