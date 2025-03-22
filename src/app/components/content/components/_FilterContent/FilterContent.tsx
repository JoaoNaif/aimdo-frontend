import { OptionContext } from '@/app/context/OptionContext'
import { Plus } from 'lucide-react'
import { SetStateAction, useContext, useState } from 'react'
import { DropdownFilter } from './DropdownFilter'
import { DropdownUrgency } from './DropdownUrgency'
import { DropdownStatus } from './DropdownStatus'
import { ValueFilterType } from '@/app/_types/FilterTypes'
import { ModalAdd } from './ModalAdd/ModalAdd'
import { ModalContext } from '@/app/context/ModalContext'
import { getFilters } from '@/app/utils/FilterObjective'

interface FilterContentProps {
  setValueFilter: (value: SetStateAction<ValueFilterType>) => void
}

export function FilterContent({ setValueFilter }: FilterContentProps) {
  const [dropDownFilter, setDropDownFilter] = useState(false)
  const [dropDownStatus, setDropDownStatus] = useState(false)
  const [dropDownUrgency, setDropDownUrgency] = useState(false)

  const { modal, openModal } = useContext(ModalContext)

  const { option } = useContext(OptionContext)

  function handleOpenModal() {
    openModal()
  }

  function toggleDropDownFilter() {
    setDropDownFilter(!dropDownFilter)
  }

  function toggleDropDownStatus() {
    setDropDownStatus(!dropDownStatus)
  }

  function toggleDropDownUrgency() {
    setDropDownUrgency(!dropDownUrgency)
  }

  function changeFilter(
    status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELED',
    urgency?: 'HIGH' | 'MEDIUM' | 'LOW',
    order?: string
  ) {
    const newValues: ValueFilterType = {
      order,
      status,
      urgency,
    }

    getFilters(newValues, setValueFilter)
  }

  return (
    <section className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
        {option === 1 && 'Terefas'}
        {option === 2 && 'Compras'}
        {option === 3 && 'Metas'}
      </h1>
      <div className="flex items-center gap-6">
        <ul className="flex list-none gap-11">
          <DropdownStatus
            dropDownStatus={dropDownStatus}
            toggleDropDownStatus={toggleDropDownStatus}
            changeFilter={changeFilter}
          />

          <DropdownUrgency
            dropDownUrgency={dropDownUrgency}
            toggleDropDownUrgency={toggleDropDownUrgency}
            changeFilter={changeFilter}
          />

          <DropdownFilter
            dropDownFilter={dropDownFilter}
            toggleDropDownFilter={toggleDropDownFilter}
            changeFilter={changeFilter}
          />
        </ul>
        <button
          onClick={handleOpenModal}
          className="flex items-center gap-1 rounded-md bg-orange-500 px-4 py-4 text-slate-800 dark:text-white"
        >
          <Plus />
          <span>
            Add nova
            {option === 1 && ' terefa'}
            {option === 2 && ' compra'}
            {option === 3 && ' meta'}
          </span>
        </button>
      </div>

      {modal && <ModalAdd />}
    </section>
  )
}
