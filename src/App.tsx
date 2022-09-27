import SearchBar from "./components/SearchBar"
import DateTime from "./components/DateTime"
import FavouriteSection from "./components/FavouriteSection"

export default function App() {
  const handleSearch = (searchQuery: string) => {
    console.log(searchQuery)
    // window.location = `https://www.google.com/search?q=${searchQuery}`
  }

  return (
    <main
      class="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(https://source.unsplash.com/random/${
          window.screen.width + "x" + window.screen.height
        }?wallpaper,nature,abstract)`,
      }}
    >
      <div class="p-8 space-y-6">
        <DateTime className="mx-auto" />
        <SearchBar
          class="mx-auto max-w-lg"
          handleSubmit={handleSearch}
          autoFocus
        />

        <FavouriteSection />
      </div>
    </main>
  )
}
