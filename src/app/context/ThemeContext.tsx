import { createContext, ReactNode, useState } from 'react'

interface ThemeContextType {
  theme: boolean
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

interface ThemeContextProviderProps {
  children: ReactNode
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, dispatch] = useState(false)

  function toggleTheme() {
    dispatch(!theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
