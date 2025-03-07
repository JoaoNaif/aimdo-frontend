import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface DropdownFilterProps {
  toggleDropDownFilter: () => void
  dropDownFilter: boolean
  changeFilter: (status?: string, urgency?: string, order?: string) => void
}

export function DropdownFilter({
  toggleDropDownFilter,
  dropDownFilter,
  changeFilter,
}: DropdownFilterProps) {
  const [value, setValue] = useState('asc')

  function changeValueFilter(valueFilter: string) {
    changeFilter(undefined, undefined, valueFilter)
    setValue(valueFilter)
  }

  return (
    <li className="relative">
      <button
        onClick={toggleDropDownFilter}
        className="flex gap-1 rounded-md bg-white px-4 py-2 text-slate-800 shadow-sm"
      >
        <span>Filtrar</span>
        <ChevronDown className="h-6 w-6" />
      </button>

      <ul
        className={`right-0 w-36 overflow-hidden rounded-md bg-white text-center shadow-md ${dropDownFilter ? 'absolute' : 'hidden'}`}
      >
        <li
          onClick={() => changeValueFilter('asc')}
          className={`cursor-pointer py-1 ${value === 'asc' ? 'bg-orange-500 text-white' : 'transition-colors duration-300 ease-in hover:bg-slate-200'}`}
        >
          Crescente
        </li>
        <li
          onClick={() => changeValueFilter('desc')}
          className={`cursor-pointer py-1 ${value === 'desc' ? 'bg-orange-500 text-white' : 'transition-colors duration-300 ease-in hover:bg-slate-200'}`}
        >
          Decrescente
        </li>
      </ul>
    </li>
  )
}
