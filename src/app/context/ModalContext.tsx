import { ReactNode, useState, createContext } from 'react'

interface ModalContextType {
  modal: boolean
  openModal: () => void
  closeModal: () => void
}

export const ModalContext = createContext({} as ModalContextType)

interface ModalContextProviderProps {
  children: ReactNode
}

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [modal, dispatch] = useState(false)

  function openModal() {
    dispatch(true)
  }

  function closeModal() {
    dispatch(false)
  }

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}
