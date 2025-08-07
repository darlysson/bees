import type { Brewery } from "@/hooks/useGetBreweries"

export const getBrewery = async (search: string): Promise<Brewery[]> => {
  if (!search) return []

  const response = await fetch(
    `https://api.openbrewerydb.org/v1/breweries/search?query=${encodeURIComponent(search)}`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch breweries')
  }

  return response.json()
}
