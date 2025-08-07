import { Card } from "./card"
import type { Brewery } from "@/hooks/useGetBreweries"
import { CardsListSkeleton } from "./cards-list-skeleton"
import { EmptyState } from "./empty-state"

interface CardsListProps {
  breweries: Brewery[]
  isLoading?: boolean
  favorites?: Brewery[]
  onToggleFavorite?: (brewery: Brewery) => void
}

export function CardsList({ breweries, isLoading = false, favorites = [], onToggleFavorite }: CardsListProps) {
  if (isLoading) {
    return (
      <CardsListSkeleton />
    )
  }

  if (breweries.length === 0) {
    return (
      <EmptyState msg='Search for a brewery to see the results' />
    )
  }

  return (
    <div className='grid grid-cols-3 gap-8 pt-10 pb-14 pl-8'>
      {breweries.map((brewery) => {
        const isFavorite = favorites.some(fav => fav.id === brewery.id)
        return (
          <Card
            key={brewery.id}
            brewery={brewery}
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        )
      })}
    </div>
  )
}
