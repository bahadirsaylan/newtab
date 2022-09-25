import SearchBar from "./components/SearchBar"
import TileList from "./components/TileList"
import Tile from "./components/Tile"

export default function App() {
  const handleSearch = (searchQuery: string) => {
    console.log(searchQuery)
    // window.location = `https://www.google.com/search?q=${searchQuery}`
  }

  return (
    <main
      class="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://source.unsplash.com/random/${
          window.screen.width + "x" + window.screen.height
        }?wallpaper,nature,abstract)`,
      }}
    >
      <div class="p-8 space-y-6">
        <h1 class="text-4xl font-bold text-white w-fit mx-auto">Hello</h1>
        <SearchBar
          class="mx-auto max-w-lg"
          handleSubmit={handleSearch}
          autoFocus
        />

        <TileList className="mx-auto">
          <a href="http://github.com">
            <Tile>
              <img src="https://github.com/favicon.ico" />
            </Tile>
          </a>
        </TileList>
      </div>
    </main>
  )
}
