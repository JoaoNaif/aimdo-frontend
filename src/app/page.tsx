'use client'

import { ThemeContextProvider } from './context/ThemeContext'
import { Home } from './components/Home'
import { OptionContextProvider } from './context/OptionContext'
import { ModalContextProvider } from './context/ModalContext'

export default function Page() {
  return (
    <ThemeContextProvider>
      <OptionContextProvider>
        <ModalContextProvider>
          <Home />
        </ModalContextProvider>
      </OptionContextProvider>
    </ThemeContextProvider>
  )
}
