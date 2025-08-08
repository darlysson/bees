import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { UserProvider, useUser } from './UserContext'

function TestComponent() {
  const { userName, handleSetUserName } = useUser()

  return (
    <div>
      <span data-testid="user-name">{userName || 'No name'}</span>
      <button
        onClick={() => handleSetUserName('John Doe')}
        data-testid="set-name-button"
      >
        Set Name
      </button>
    </div>
  )
}

describe('UserContext', () => {
  it('should provide initial empty user name', () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    )

    expect(screen.getByTestId('user-name')).toHaveTextContent('No name')
  })

  it('should update user name when handleSetUserName is called', () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    )

    const setButton = screen.getByTestId('set-name-button')
    fireEvent.click(setButton)

    expect(screen.getByTestId('user-name')).toHaveTextContent('John Doe')
  })

  it('should throw error when useUser is used outside provider', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { })

    expect(() => {
      render(<TestComponent />)
    }).toThrow('useUser must be used within a UserProvider')

    consoleSpy.mockRestore()
  })

  it('should maintain user name across re-renders', () => {
    const { rerender } = render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    )

    const setButton = screen.getByTestId('set-name-button')
    fireEvent.click(setButton)

    expect(screen.getByTestId('user-name')).toHaveTextContent('John Doe')

    rerender(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    )

    expect(screen.getByTestId('user-name')).toHaveTextContent('John Doe')
  })

  it('should handle multiple name updates', () => {
    function MultiUpdateTest() {
      const { userName, handleSetUserName } = useUser()

      return (
        <div>
          <span data-testid="user-name">{userName || 'No name'}</span>
          <button
            onClick={() => handleSetUserName('First Name')}
            data-testid="first-button"
          >
            Set First
          </button>
          <button
            onClick={() => handleSetUserName('Second Name')}
            data-testid="second-button"
          >
            Set Second
          </button>
        </div>
      )
    }

    render(
      <UserProvider>
        <MultiUpdateTest />
      </UserProvider>
    )

    const firstButton = screen.getByTestId('first-button')
    const secondButton = screen.getByTestId('second-button')

    fireEvent.click(firstButton)
    expect(screen.getByTestId('user-name')).toHaveTextContent('First Name')

    fireEvent.click(secondButton)
    expect(screen.getByTestId('user-name')).toHaveTextContent('Second Name')
  })
}) 
