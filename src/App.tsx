import SearchBar from "./components/SearchBar"
import DateTime from "./components/DateTime"
import FavouriteSection from "./components/FavouriteSection"
import clsx from "clsx"
import { useSettingStore } from "./store/settings"
import ThemeToggle from "./components/ThemeToggle"
import Footer from "./components/Footer"
import { getRandomImage } from "./utils/image"
import { useMemo } from "preact/hooks"

export default function App() {
  const darkMode = useSettingStore.darkMode()[0]

  const randImg = useMemo(
    () => getRandomImage({ seeds: ["wallpaper", "nature", "abstract"] }),
    []
  )

  return (
    <main
      class={clsx("h-screen bg-cover bg-center", darkMode && "dark")}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url("${randImg}")`,
      }}
    >
      <ThemeToggle className="absolute right-2 top-2" />
      <div class="p-8 space-y-6">
        <DateTime className="mx-auto" />
        <SearchBar className="mx-auto max-w-lg" autoFocus />
        <FavouriteSection />
      </div>
      <Footer />
    </main>
  )
}
