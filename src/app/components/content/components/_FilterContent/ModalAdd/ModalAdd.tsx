import { X } from 'lucide-react'
import { ModalForm } from './ModalForm'
import { useContext } from 'react'
import { ModalContext } from '@/app/context/ModalContext'

export function ModalAdd() {
  const { closeModal } = useContext(ModalContext)

  function handleCloseModal() {
    closeModal()
  }

  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-80">
      <div className="flex w-[500px] flex-col gap-5 rounded-md bg-white p-3">
        <header className="flex justify-between">
          <section className="text-slate-400">
            <h1 className="font-bold">Adicionar</h1>
            <p className="text-xs">
              metas, tarefas ou compras que desejar para seu futuro
            </p>
          </section>
          <div
            onClick={handleCloseModal}
            className="cursor-pointer text-slate-400 transition-colors duration-200 ease-linear hover:text-slate-600"
          >
            <X />
          </div>
        </header>
        <ModalForm handleCloseModal={handleCloseModal} />
      </div>
    </div>
  )
}
