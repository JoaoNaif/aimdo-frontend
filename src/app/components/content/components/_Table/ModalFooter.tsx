import { ProductType } from '@/app/mock/ProductMock'
import { useState } from 'react'

interface ModalFooterProps {
  item: ProductType
}

export function ModalFooter({ item }: ModalFooterProps) {
  const [cancelButton, setCancelButton] = useState(false)

  function handleCancelButton() {
    setCancelButton(!cancelButton)
  }

  return (
    <>
      {cancelButton ? (
        <div className="flex items-center justify-between border-t-2 border-slate-300 pt-3 text-sm font-bold">
          <h3>Tem certeza que deseja cancelar?</h3>
          <div className="flex gap-2">
            <button className="rounded-sm border border-slate-300 px-2 py-1 text-slate-300 transition-colors duration-200 ease-linear hover:border-slate-400 hover:bg-slate-300 hover:text-slate-400">
              Sim
            </button>
            <button
              onClick={handleCancelButton}
              className="rounded-sm border border-slate-300 px-2 py-1 text-slate-300 transition-colors duration-200 ease-linear hover:border-slate-400 hover:bg-slate-300 hover:text-slate-400"
            >
              Voltar
            </button>
          </div>
        </div>
      ) : (
        <footer className="flex justify-end gap-5 border-t-2 border-slate-300 pr-3 pt-3 font-bold">
          {item.status !== 'canceled' && (
            <button
              onClick={handleCancelButton}
              className="rounded-sm border border-slate-300 px-4 py-1 text-slate-400 transition-colors duration-200 ease-linear hover:border-rose-500 hover:bg-rose-200 hover:text-rose-500"
            >
              Cancelar
            </button>
          )}
          <button
            className={`rounded-sm px-4 py-2 text-white transition-colors duration-200 ease-linear ${item.status === 'pending' && 'bg-indigo-600 hover:bg-indigo-700'} ${item.status === 'in-progress' && 'bg-emerald-500 hover:bg-emerald-600'} ${item.status === 'canceled' && 'bg-amber-500 hover:bg-amber-600'} ${item.status === 'completed' && 'bg-emerald-900'}`}
          >
            {item.status === 'pending' && 'Iniciar'}
            {item.status === 'in-progress' && 'Concluir'}
            {item.status === 'completed' && 'Concluído'}
            {item.status === 'canceled' && 'Retomar'}
          </button>
        </footer>
      )}
    </>
  )
}
