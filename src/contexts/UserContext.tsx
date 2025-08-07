import { createContext, useContext, useState, type ReactNode } from 'react'

interface UserContextType {
  userName: string
  handleSetUserName: (name: string) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState('')

  const handleSetUserName = (name: string) => setUserName(name)

  return (
    <UserContext.Provider value={{ userName, handleSetUserName }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}
