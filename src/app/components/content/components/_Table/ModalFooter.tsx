import { Objective } from '@/app/_types/Objective'
import { cancelStatus } from '@/app/api/cancel-status'
import { changeStatus } from '@/app/api/change-status'
import { uncancelStatus } from '@/app/api/uncancel-status'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

interface ModalFooterProps {
  item: Objective
}

export function ModalFooter({ item }: ModalFooterProps) {
  const [cancelButton, setCancelButton] = useState(false)
  const queryClient = useQueryClient()

  const { mutateAsync: changeStatusFn, isPending: isChangingStatus } =
    useMutation({
      mutationFn: changeStatus,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['objectives', `${item.category.toLowerCase()}`],
        })
      },
    })

  const { mutateAsync: cancelStatusFn, isPending: isCancelingStatus } =
    useMutation({
      mutationFn: cancelStatus,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['objectives', `${item.category.toLowerCase()}`],
        })
      },
    })

  const { mutateAsync: uncancelStatusFn, isPending: isUncacelingStatus } =
    useMutation({
      mutationFn: uncancelStatus,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['objectives', `${item.category.toLowerCase()}`],
        })
      },
    })

  function handleCancelButton() {
    setCancelButton(!cancelButton)
  }

  return (
    <>
      {cancelButton ? (
        <div className="flex items-center justify-between border-t-2 border-slate-300 pt-3 text-sm font-bold">
          <h3>Tem certeza que deseja cancelar?</h3>
          <div className="flex gap-2">
            <button
              disabled={item.status === 'CANCELED' || isCancelingStatus}
              onClick={() => cancelStatusFn({ objectiveId: item.id })}
              className="rounded-sm border border-slate-300 px-2 py-1 text-slate-300 transition-colors duration-200 ease-linear hover:border-slate-400 hover:bg-slate-300 hover:text-slate-400"
            >
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
          {item.status !== 'CANCELED' && (
            <button
              onClick={handleCancelButton}
              className="rounded-sm border border-slate-300 px-4 py-1 text-slate-400 transition-colors duration-200 ease-linear hover:border-rose-500 hover:bg-rose-200 hover:text-rose-500"
            >
              Cancelar
            </button>
          )}
          {item.status !== 'CANCELED' ? (
            <button
              disabled={item.status === 'COMPLETED' || isChangingStatus}
              onClick={() => changeStatusFn({ objectiveId: item.id })}
              className={`rounded-sm px-4 py-2 text-white transition-colors duration-200 ease-linear ${item.status === 'PENDING' && 'bg-indigo-600 hover:bg-indigo-700'} ${item.status === 'IN_PROGRESS' && 'bg-emerald-500 hover:bg-emerald-600'} ${item.status === 'COMPLETED' && 'bg-emerald-900'}`}
            >
              {item.status === 'PENDING' && 'Iniciar'}
              {item.status === 'IN_PROGRESS' && 'Concluir'}
              {item.status === 'COMPLETED' && 'Concluído'}
            </button>
          ) : (
            <button
              disabled={item.status !== 'CANCELED' || isUncacelingStatus}
              onClick={() => uncancelStatusFn({ objectiveId: item.id })}
              className={`rounded-sm px-4 py-2 text-white transition-colors duration-200 ease-linear ${item.status === 'CANCELED' && 'bg-amber-500 hover:bg-amber-600'} `}
            >
              {item.status === 'CANCELED' && 'Retomar'}
            </button>
          )}
        </footer>
      )}
    </>
  )
}
