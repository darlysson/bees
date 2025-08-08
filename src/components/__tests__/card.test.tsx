import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Card } from '../card'
import type { Brewery } from '@/hooks/useGetBreweries'

const mockBrewery: Brewery = {
  id: '1',
  name: 'Test Brewery',
  brewery_type: 'micro',
  address_1: '123 Test Street',
  city: 'Test City',
  postal_code: '12345',
  country: 'Test Country',
  phone: '123-456-7890',
  state: 'Test State'
}

describe('Card', () => {
  it('should render brewery information correctly', () => {
    render(<Card brewery={mockBrewery} />)

    expect(screen.getByText('Test Brewery')).toBeInTheDocument()
    expect(screen.getByText('123 Test Street')).toBeInTheDocument()
    expect(screen.getByText('Test City - Test State - Test Country')).toBeInTheDocument()
    expect(screen.getByText('micro')).toBeInTheDocument()
    expect(screen.getByText('12345')).toBeInTheDocument()
    expect(screen.getByText('123-456-7890')).toBeInTheDocument()
  })

  it('should show plus icon when not favorited', () => {
    render(<Card brewery={mockBrewery} isFavorite={false} />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button.querySelector('svg')).toBeInTheDocument()
  })

  it('should show trash icon when favorited', () => {
    render(<Card brewery={mockBrewery} isFavorite={true} />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button.querySelector('svg')).toBeInTheDocument()
  })

  it('should call onToggleFavorite when button is clicked', () => {
    const mockToggleFavorite = vi.fn()
    render(
      <Card
        brewery={mockBrewery}
        isFavorite={false}
        onToggleFavorite={mockToggleFavorite}
      />
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockToggleFavorite).toHaveBeenCalledWith(mockBrewery)
  })

  it('should handle null address gracefully', () => {
    const breweryWithNullAddress = {
      ...mockBrewery,
      address_1: null
    }

    render(<Card brewery={breweryWithNullAddress} />)

    expect(screen.getByText('Test Brewery')).toBeInTheDocument()
    expect(screen.getByText('Test City - Test State - Test Country')).toBeInTheDocument()
  })

  it('should not call onToggleFavorite when not provided', () => {
    render(<Card brewery={mockBrewery} isFavorite={false} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(button).toBeInTheDocument()
  })

  it('should apply correct styling classes', () => {
    render(<Card brewery={mockBrewery} />)

    const card = screen.getByText('Test Brewery').closest('div')?.parentElement
    expect(card).toHaveClass('bg-white', 'rounded-sm', 'border')
  })
}) 
