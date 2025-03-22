import { createContext, ReactNode, useState } from 'react'

interface SearchContextType {
  search: string
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchContext = createContext({} as SearchContextType)

interface SearchContextProviderProps {
  children: ReactNode
}

export function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  const [search, dispatch] = useState('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    dispatch(value)
  }

  return (
    <SearchContext.Provider value={{ search, handleInputChange }}>
      {children}
    </SearchContext.Provider>
  )
}
