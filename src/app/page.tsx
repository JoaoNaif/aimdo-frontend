'use client'

import { ThemeContextProvider } from './context/ThemeContext'
import { Home } from './components/Home'
import { OptionContextProvider } from './context/OptionContext'
import { ModalContextProvider } from './context/ModalContext'
import { Toaster } from 'sonner'

export default function Page() {
  return (
    <ThemeContextProvider>
      <OptionContextProvider>
        <ModalContextProvider>
          <Toaster richColors />
          <Home />
        </ModalContextProvider>
      </OptionContextProvider>
    </ThemeContextProvider>
  )
}
