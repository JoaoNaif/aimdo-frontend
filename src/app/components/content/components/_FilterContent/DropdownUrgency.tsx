import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface DropdownUrgencyType {
  toggleDropDownUrgency: () => void
  dropDownUrgency: boolean
  changeFilter: (
    status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELED',
    urgency?: 'HIGH' | 'MEDIUM' | 'LOW',
    order?: string
  ) => void
}

export function DropdownUrgency({
  dropDownUrgency,
  toggleDropDownUrgency,
  changeFilter,
}: DropdownUrgencyType) {
  const [value, setValue] = useState('HIGH')

  function changeValueFilter(valueFilter: 'HIGH' | 'MEDIUM' | 'LOW') {
    changeFilter(undefined, valueFilter)
    setValue(valueFilter)
  }

  return (
    <li className="relative">
      <button
        onClick={toggleDropDownUrgency}
        className="flex gap-1 rounded-md bg-white px-4 py-2 text-slate-800 shadow-sm"
      >
        <span>Urgência</span>
        <ChevronDown className="h-6 w-6" />
      </button>

      <ul
        className={`right-0 w-36 overflow-hidden rounded-md bg-white text-center shadow-md ${dropDownUrgency ? 'absolute' : 'hidden'}`}
      >
        <li
          onClick={() => changeValueFilter('HIGH')}
          className={`cursor-pointer py-1 ${value === 'HIGH' ? 'bg-orange-500 text-white' : 'transition-colors duration-300 ease-in hover:bg-slate-200'}`}
        >
          High
        </li>
        <li
          onClick={() => changeValueFilter('MEDIUM')}
          className={`cursor-pointer py-1 ${value === 'MEDIUM' ? 'bg-orange-500 text-white' : 'transition-colors duration-300 ease-in hover:bg-slate-200'}`}
        >
          Medium
        </li>
        <li
          onClick={() => changeValueFilter('LOW')}
          className={`cursor-pointer py-1 ${value === 'LOW' ? 'bg-orange-500 text-white' : 'transition-colors duration-300 ease-in hover:bg-slate-200'}`}
        >
          Low
        </li>
      </ul>
    </li>
  )
}
