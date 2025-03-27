import { Pencil, UserPlus, Users, X } from 'lucide-react'
import { ModalSummary } from './ModalSummary'
import { ModalFooter } from './ModalFooter'
import { Objective } from '@/app/_types/Objective'
import { useState } from 'react'
import { ModalCollaborators } from './ModalCollaborators'
import { ModalEdit } from './components/ModalEdit'

interface ModalTableProps {
  item: Objective
  handleCloseModal: () => void
}

export function ModalTable({ item, handleCloseModal }: ModalTableProps) {
  const [modalRight, setModalRight] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [activeSide, setActiveSide] = useState(false)

  function handleChangeModalCollaborators(status: boolean, edit: boolean) {
    setActiveSide(status)
    setIsEdit(edit)
    setModalRight(!modalRight)
  }

  function handleChangeActiveSide(status: boolean) {
    setActiveSide(status)
  }

  return (
    <section className="relative rounded-md">
      <div
        className={`absolute right-0 top-0 -z-10 h-full w-full rounded-r-md bg-slate-100 p-4 pl-8 transition-all duration-200 ease-linear ${modalRight && 'right-[-380px]'}`}
      >
        {isEdit ? (
          <ModalEdit objectiveId={item.id} />
        ) : (
          <ModalCollaborators
            handleChangeActiveSide={handleChangeActiveSide}
            activeSide={activeSide}
            handleChangeModalCollaborators={handleChangeModalCollaborators}
            objectiveId={item.id}
          />
        )}
      </div>
      <main className="flex min-h-[500px] w-[400px] flex-col justify-between gap-7 rounded-md bg-white p-3">
        <div className="flex h-full flex-1 flex-col justify-around">
          <header className="flex items-start justify-between">
            <button
              onClick={() => handleChangeModalCollaborators(true, true)}
              className="cursor-pointer rounded-full p-2 font-bold transition-colors duration-200 ease-linear hover:bg-orange-500 hover:text-slate-50"
            >
              <Pencil className="h-6 w-6" />
            </button>
            <div
              onClick={handleCloseModal}
              className="flex cursor-pointer items-center justify-center rounded-full transition-colors duration-200 ease-linear hover:text-slate-500"
            >
              <X className="h-7 w-7" />
            </div>
          </header>
          <section className="flex flex-col gap-2">
            <h1 className="w-[70%] text-2xl font-bold">{item.title}</h1>
            <ul className="flex gap-4 text-sm font-bold">
              <li
                onClick={() => handleChangeModalCollaborators(true, false)}
                title="Vizualizar colaborador"
                className="cursor-pointer rounded-sm p-1 transition-colors duration-300 ease-linear hover:bg-slate-300"
              >
                <Users />
              </li>
              <li
                onClick={() => handleChangeModalCollaborators(false, false)}
                title="Adicionar colaborador"
                className="cursor-pointer rounded-sm p-1 transition-colors duration-300 ease-linear hover:bg-orange-500 hover:text-white"
              >
                <UserPlus />
              </li>
            </ul>
            <p className="h-[100px] text-sm text-slate-600">
              {item.description}
            </p>
            <ModalSummary item={item} />
          </section>
        </div>
        <ModalFooter item={item} />
      </main>
    </section>
  )
}
