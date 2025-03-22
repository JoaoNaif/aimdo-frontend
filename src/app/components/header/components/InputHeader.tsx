import { OptionContext } from '@/app/context/OptionContext'
import { SearchContext } from '@/app/context/searchContext'
import { useContext } from 'react'

export function InputHeader() {
  const { changeOption } = useContext(OptionContext)
  const { search, handleInputChange } = useContext(SearchContext)

  return (
    <input
      type="text"
      className="w-full rounded-full py-2 pl-16 outline-none placeholder:text-slate-300 placeholder:dark:text-slate-500"
      placeholder="Procurar"
      onClick={() => changeOption(4)}
      value={search}
      onChange={(e) => handleInputChange(e)}
    />
  )
}
