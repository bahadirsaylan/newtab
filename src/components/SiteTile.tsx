import clsx from "clsx"

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
          "rounded-xl bg-gray-200 p-4",
          "shadow hover:shadow-lg transition-shadow",
          className
        )}
      >
        <img
          src={`https://icons.duckduckgo.com/ip3/${new URL(url).hostname}.ico`}
        />
      </div>
      <p class="text-xs text-center mt-1">{name}</p>
    </a>
  )
}

export default SiteTile
