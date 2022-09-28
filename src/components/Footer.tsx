import clsx from "clsx"
import { Github } from "preact-feather"

function Footer({}) {
  return (
    <footer
      class={clsx(
        "flex items-center",
        "absolute bottom-3 right-3",
        "bg-gray-300/30 text-sm text-white",
        "backdrop-filter backdrop-blur",
        "p-2 rounded-lg",
        "dark:bg-gray-700/60 group"
      )}
    >
      <a
        href="https://github.com/nimone/newtab"
        target="_blank"
        class="flex items-center"
      >
        <Github class="w-5 h-5" />
      </a>
      <div class="overflow-x-hidden w-0 group-hover:w-[58px] transition-all">
        <span class="mx-1">by</span>
        <a
          href="https://nimo.pages.dev/"
          target="_blank"
          class="border-b border-green-400"
        >
          nimo
        </a>
      </div>
    </footer>
  )
}

export default Footer
