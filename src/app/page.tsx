'use client'

import { ThemeContextProvider } from './context/ThemeContext'
import { Home } from './components/Home'
import { OptionContextProvider } from './context/OptionContext'
import { ModalContextProvider } from './context/ModalContext'
import { SearchContextProvider } from './context/searchContext'

export default function Page() {
  return (
    <ThemeContextProvider>
      <OptionContextProvider>
        <ModalContextProvider>
          <SearchContextProvider>
            <Home />
          </SearchContextProvider>
        </ModalContextProvider>
      </OptionContextProvider>
    </ThemeContextProvider>
  )
}
