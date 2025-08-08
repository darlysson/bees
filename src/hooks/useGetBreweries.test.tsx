import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useGetBreweries } from './useGetBreweries'

vi.mock('@/services/getBrewery.service', () => ({
  getBrewery: vi.fn()
}))

import { getBrewery } from '@/services/getBrewery.service'

const mockGetBrewery = vi.mocked(getBrewery)

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient} >
      {children}
    </QueryClientProvider>
  )
}

describe('useGetBreweries', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return empty array when search is empty', async () => {
    const { result } = renderHook(() => useGetBreweries({ search: '' }), {
      wrapper: createWrapper(),
    })

    expect(result.current.isLoading).toBe(false)
    expect(mockGetBrewery).not.toHaveBeenCalled()
  })

  it('should call API when search has content', async () => {
    const mockBreweries = [
      {
        id: '1',
        name: 'Test Brewery',
        brewery_type: 'micro',
        address_1: '123 Test St',
        city: 'Test City',
        postal_code: '12345',
        country: 'Test Country',
        phone: '123-456-7890',
        state: 'Test State'
      }
    ]

    mockGetBrewery.mockResolvedValue(mockBreweries)

    const { result } = renderHook(() => useGetBreweries({ search: 'test' }), {
      wrapper: createWrapper(),
    })

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(mockGetBrewery).toHaveBeenCalledWith('test')
    expect(result.current.data).toEqual(mockBreweries)
  })

  it('should handle API errors', async () => {
    const error = new Error('API Error')
    mockGetBrewery.mockRejectedValue(error)

    const { result } = renderHook(() => useGetBreweries({ search: 'error' }), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.error).toBeDefined()
  })

  it('should not call API when disabled', () => {
    const { result } = renderHook(() => useGetBreweries({
      search: 'test',
      enabled: false
    }), {
      wrapper: createWrapper(),
    })

    expect(result.current.isLoading).toBe(false)
    expect(mockGetBrewery).not.toHaveBeenCalled()
  })

  it('should handle whitespace-only search', () => {
    const { result } = renderHook(() => useGetBreweries({ search: '   ' }), {
      wrapper: createWrapper(),
    })

    expect(result.current.isLoading).toBe(false)
    expect(mockGetBrewery).not.toHaveBeenCalled()
  })
}) 
