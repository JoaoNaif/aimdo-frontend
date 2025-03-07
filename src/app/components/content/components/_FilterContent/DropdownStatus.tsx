import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface DropdownStatusTypes {
  toggleDropDownStatus: () => void
  dropDownStatus: boolean
  changeFilter: (status?: string, urgency?: string, order?: string) => void
}

export function DropdownStatus({
  dropDownStatus,
  toggleDropDownStatus,
  changeFilter,
}: DropdownStatusTypes) {
  const [value, setValue] = useState('pending')

  function changeValueFilter(valueFilter: string) {
    changeFilter(valueFilter)
    setValue(valueFilter)
  }

  return (
    <li className="relative">
      <button
        onClick={toggleDropDownStatus}
        className="flex gap-1 rounded-md bg-white px-4 py-2 text-slate-800 shadow-sm"
      >
        <span>Status</span>
        <ChevronDown className="h-6 w-6" />
      </button>

      <ul
        className={`right-0 w-36 overflow-hidden rounded-md bg-white text-center shadow-md ${dropDownStatus ? 'absolute' : 'hidden'}`}
      >
        <li
          onClick={() => changeValueFilter('pending')}
          className={`cursor-pointer py-1 ${value === 'pending' ? 'bg-orange-500 text-white' : 'transition-colors duration-300 ease-in hover:bg-slate-200'}`}
        >
          Pending
        </li>
        <li
          onClick={() => changeValueFilter('in-progress')}
          className={`cursor-pointer py-1 ${value === 'in-progress' ? 'bg-orange-500 text-white' : 'transition-colors duration-300 ease-linear hover:bg-slate-200'}`}
        >
          In progress
        </li>
        <li
          onClick={() => changeValueFilter('completed')}
          className={`cursor-pointer py-1 ${value === 'completed' ? 'bg-orange-500 text-white' : 'transition-colors duration-300 ease-linear hover:bg-slate-200'}`}
        >
          Completed
        </li>
        <li
          onClick={() => changeValueFilter('canceled')}
          className={`cursor-pointer py-1 ${value === 'canceled' ? 'bg-orange-500 text-white' : 'transition-colors duration-300 ease-linear hover:bg-slate-200'}`}
        >
          Canceled
        </li>
      </ul>
    </li>
  )
}
