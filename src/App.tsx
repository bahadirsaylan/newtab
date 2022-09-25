import SearchBar from "./components/SearchBar"

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
      </div>
    </main>
  )
}
