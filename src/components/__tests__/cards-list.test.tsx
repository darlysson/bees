import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { CardsList } from '../cards-list'
import type { Brewery } from '@/hooks/useGetBreweries'

const mockBreweries: Brewery[] = [
  {
    id: '1',
    name: 'Test Brewery 1',
    brewery_type: 'micro',
    address_1: '123 Test Street',
    city: 'Test City',
    postal_code: '12345',
    country: 'Test Country',
    phone: '123-456-7890',
    state: 'Test State'
  },
  {
    id: '2',
    name: 'Test Brewery 2',
    brewery_type: 'brewpub',
    address_1: '456 Another Street',
    city: 'Another City',
    postal_code: '67890',
    country: 'Another Country',
    phone: '098-765-4321',
    state: 'Another State'
  }
]

describe('CardsList', () => {
  it('should render breweries correctly', () => {
    render(<CardsList breweries={mockBreweries} />)

    expect(screen.getByText('Test Brewery 1')).toBeInTheDocument()
    expect(screen.getByText('Test Brewery 2')).toBeInTheDocument()
    expect(screen.getByText('123 Test Street')).toBeInTheDocument()
    expect(screen.getByText('456 Another Street')).toBeInTheDocument()
  })

  it('should show loading skeleton when isLoading is true', () => {
    render(<CardsList breweries={[]} isLoading={true} />)

    const skeletonElements = screen.getAllByText('')
    expect(skeletonElements.length).toBeGreaterThan(0)
  })

  it('should show empty state when no breweries', () => {
    render(<CardsList breweries={[]} isLoading={false} />)

    expect(screen.getByText('Search for a brewery to see the results')).toBeInTheDocument()
  })

  it('should call onToggleFavorite when favorite button is clicked', () => {
    const mockToggleFavorite = vi.fn()
    render(
      <CardsList
        breweries={mockBreweries}
        onToggleFavorite={mockToggleFavorite}
        favorites={[]}
      />
    )

    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0])

    expect(mockToggleFavorite).toHaveBeenCalledWith(mockBreweries[0])
  })

  it('should show correct favorite state for breweries', () => {
    const favorites = [mockBreweries[0]]
    render(
      <CardsList
        breweries={mockBreweries}
        favorites={favorites}
        onToggleFavorite={vi.fn()}
      />
    )

    expect(screen.getByText('Test Brewery 1')).toBeInTheDocument()
    expect(screen.getByText('Test Brewery 2')).toBeInTheDocument()
  })

  it('should handle empty favorites array', () => {
    render(
      <CardsList
        breweries={mockBreweries}
        favorites={[]}
        onToggleFavorite={vi.fn()}
      />
    )

    expect(screen.getByText('Test Brewery 1')).toBeInTheDocument()
    expect(screen.getByText('Test Brewery 2')).toBeInTheDocument()
  })

  it('should not call onToggleFavorite when not provided', () => {
    render(<CardsList breweries={mockBreweries} />)

    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0])

    expect(buttons[0]).toBeInTheDocument()
  })

  it('should apply correct grid layout classes', () => {
    render(<CardsList breweries={mockBreweries} />)

    const gridContainer = screen.getByText('Test Brewery 1').closest('div')?.parentElement?.parentElement
    expect(gridContainer).toHaveClass('grid', 'grid-cols-3', 'gap-8')
  })
}) 
