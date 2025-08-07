import { CardsList } from '@/components/cards-list'
import { EmptyState } from '@/components/empty-state'
import { useGetBreweries } from '@/hooks/useGetBreweries'
import type { Brewery } from '@/hooks/useGetBreweries'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { X } from '@phosphor-icons/react'
import { Header } from '@/components/Header'

export const Route = createFileRoute('/brewery-list/')({
  component: BreweryList,
})

function BreweryList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [favorites, setFavorites] = useState<Brewery[]>([])

  const { data: breweries = [], isLoading, error } = useGetBreweries({
    search: searchQuery,
    enabled: searchQuery.length > 0
  })

  const handleSearch = () => {
    setSearchQuery(searchInput)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleClearSearch = () => {
    setSearchInput('')
    setSearchQuery('')
  }

  const handleToggleFavorite = (brewery: Brewery) => {
    setFavorites((prev) => {
      const isAlreadyFavorite = prev.some(fav => fav.id === brewery.id)
      if (isAlreadyFavorite) {
        return prev.filter(fav => fav.id !== brewery.id)
      } else {
        return [...prev, brewery]
      }
    })
  }

  if (error) {
    return <div className='flex items-center justify-center h-screen'>Ooops. Something went wrong. Please try again later.</div>
  }

  return (
    <>
      <Header />
      <div className='max-w-[1500px] m-auto h-screen py-14 flex flex-col bg-[#FFFAF2]'>
        <section className='border-b h-full'>
          <h3 className='font-semibold text-5xl'>Your favorite breweries</h3>

          {favorites.length === 0 ? (
            <EmptyState msg="You don't have any favorite brewery :(" />
          ) : (
            <CardsList
              breweries={favorites}
              isLoading={false}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
        </section>

        <section className='h-full pt-14'>
          <div className='flex justify-between items-center'>
            <h3 className='font-semibold text-5xl'>Add a new brewery</h3>

            <div className="flex gap-2">
              <div className='relative w-[300px]'>
                <input
                  placeholder='Find for your new favorite brewery'
                  name='search-brewery'
                  className='border border-gray-300 bg-white px-3 py-2.5 w-full rounded-sm pr-10'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                />

                {searchInput && (
                  <button
                    onClick={handleClearSearch}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                  >
                    <X size={16} weight="bold" />
                  </button>
                )}
              </div>

              <button
                className={`px-4 py-2 text-yellow-300 rounded-sm text-sm transition-colors ${!!searchInput
                  ? 'bg-black cursor-pointer hover:bg-gray-800'
                  : 'bg-gray-500 cursor-not-allowed'
                  }`}
                onClick={handleSearch}
                disabled={!searchInput.trim()}
              >
                Search
              </button>
            </div>
          </div>

          <CardsList
            breweries={breweries.filter(brewery => !favorites.some(fav => fav.id === brewery.id))}
            isLoading={isLoading}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        </section>
      </div>
    </>
  )
}
