import { useQuery } from '@tanstack/react-query'
import { getBrewery } from '@/services/getBrewery.service'

export interface Brewery {
  id: string
  name: string
  brewery_type: string
  address_1: string | null
  city: string
  postal_code: string
  country: string
  phone: string
  state: string
}

interface UseGetBreweriesParams {
  search: string
  enabled?: boolean
}

export function useGetBreweries({ search, enabled = true }: UseGetBreweriesParams) {
  return useQuery({
    queryKey: ['breweries', search],
    queryFn: () => getBrewery(search),
    enabled: enabled && search.trim().length > 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}
