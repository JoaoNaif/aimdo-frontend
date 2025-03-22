import { UserPlus, Users, X } from 'lucide-react'
import { ModalSummary } from './ModalSummary'
import { ModalFooter } from './ModalFooter'
import { Objective } from '@/app/_types/Objective'

interface ModalTableProps {
  item: Objective
  handleCloseModal: () => void
}

export function ModalTable({ item, handleCloseModal }: ModalTableProps) {
  return (
    <section className="flex min-h-[500] w-[400px] flex-col justify-between gap-5 rounded-md bg-white p-3">
      <div className="flex flex-col gap-7">
        <header className="flex items-center justify-between">
          <div className="rounded-full bg-slate-500 px-3 py-2 font-bold">
            JV
          </div>
          <div
            onClick={handleCloseModal}
            className="flex cursor-pointer items-center justify-center rounded-full transition-colors duration-200 ease-linear hover:text-slate-500"
          >
            <X className="h-7 w-7" />
          </div>
        </header>
        <main className="flex flex-col gap-2">
          <h1 className="w-[70%] text-xl font-bold">{item.title}</h1>
          <ul className="flex gap-4 text-sm font-bold">
            <li
              title="Vizualizar colaborador"
              className="cursor-pointer rounded-sm p-1 transition-colors duration-300 ease-linear hover:bg-slate-300"
            >
              <Users />
            </li>
            <li
              title="Adicionar colaborador"
              className="cursor-pointer rounded-sm p-1 transition-colors duration-300 ease-linear hover:bg-orange-500 hover:text-white"
            >
              <UserPlus />
            </li>
          </ul>
          <p className="h-[100px] text-sm text-slate-600">{item.description}</p>
          <ModalSummary item={item} />
        </main>
      </div>
      <ModalFooter item={item} />
    </section>
  )
}
