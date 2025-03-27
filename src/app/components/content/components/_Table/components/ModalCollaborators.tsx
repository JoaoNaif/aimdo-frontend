import { Collaborator } from '@/app/_types/Collaborators'
import { removeCollaborator } from '@/app/api/remove-collaborator'
import { useMutation } from '@tanstack/react-query'
import { ArchiveX, User } from 'lucide-react'
import { toast } from 'sonner'

export interface ModalCollaboratorsProps {
  item: Collaborator
  objectiveId: string
}

export function ListCollaborators({
  item,
  objectiveId,
}: ModalCollaboratorsProps) {
  const {
    mutateAsync: removeCollaboratorFn,
    isPending: isRemovingCollaborator,
  } = useMutation({
    mutationFn: removeCollaborator,
    onSuccess: () => {
      toast.success('Colaborador excluído')
    },
  })
  return (
    <li className="p- flex items-center justify-between rounded-md bg-slate-900 p-2 text-slate-50">
      <header className="flex gap-2 rounded-md">
        <div className="flex items-center justify-center rounded-full bg-orange-500 px-3">
          <User className="h-6 w-6" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-sm">{item.email}</p>
        </div>
      </header>
      <button
        disabled={isRemovingCollaborator}
        onClick={() =>
          removeCollaboratorFn({
            collaboratorId: item.id,
            objectiveId,
          })
        }
        title=""
        className="cursor-pointer hover:text-rose-500"
      >
        <ArchiveX />
      </button>
    </li>
  )
}
