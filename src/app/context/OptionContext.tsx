import { ReactNode, createContext, useState } from 'react'

interface OptionContextType {
  option: number
  changeOption: (num: number) => void
}

export const OptionContext = createContext({} as OptionContextType)

interface OptionContextProviderProps {
  children: ReactNode
}

export function OptionContextProvider({
  children,
}: OptionContextProviderProps) {
  const [option, dispatch] = useState(0)

  function changeOption(num: number) {
    dispatch(num)
  }

  return (
    <OptionContext.Provider value={{ option, changeOption }}>
      {children}
    </OptionContext.Provider>
  )
}
