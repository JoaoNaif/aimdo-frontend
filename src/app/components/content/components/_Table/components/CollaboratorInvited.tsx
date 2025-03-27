import { addCollaborator } from '@/app/api/add-collaborator'
import { getEmailUser } from '@/app/api/get-email-user'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Mail, Search, User } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export interface CollaboratorInvitedProps {
  objectiveId: string
}

export function CollaboratorInvited({ objectiveId }: CollaboratorInvitedProps) {
  const [email, setEmail] = useState('')

  const { data: collaborator, refetch } = useQuery({
    queryFn: () => getEmailUser({ email }),
    queryKey: ['user', email],
    enabled: false,
  })

  const { mutateAsync: addCollaboratorFn, isPending: isAddingCollaborator } =
    useMutation({
      mutationFn: addCollaborator,
      onSuccess: () => {
        toast.success('Convite enviado!')
      },
      onError: (error) => {
        const statusError = error.response?.status

        if (statusError === 409) {
          toast.error('Convite já enviado!')
        } else {
          toast.error('Ocorreu um erro ao enviar o convite.')
        }
      },
    })

  function handleEmail() {
    refetch()
  }

  return (
    <div>
      <form className="relative mt-10">
        <input
          type="email"
          className="w-full rounded-md bg-slate-800 px-3 py-2 text-white outline-none"
          placeholder="digite o email do colaborador"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="button"
          onClick={handleEmail}
          className="absolute right-0 rounded-r-md bg-orange-500 p-2 transition-colors duration-200 ease-linear hover:text-white"
        >
          <Search />
        </button>
      </form>
      {collaborator && (
        <section className="relative mt-8 flex items-center gap-2 rounded-md bg-slate-900 p-2 text-slate-50">
          <div className="rounded-full bg-orange-500 p-2">
            <User />
          </div>
          <main className="flex flex-col">
            <h3 className="font-bold">{collaborator.name}</h3>
            <p className="text-sm">{collaborator.email}</p>
          </main>
          <button
            disabled={isAddingCollaborator}
            onClick={() =>
              addCollaboratorFn({
                collaboratorId: collaborator.id,
                objectiveId,
              })
            }
            type="button"
            className="absolute right-0 top-0 flex h-full cursor-pointer items-center rounded-l-full bg-orange-500 pl-6 pr-3 text-slate-900 transition-colors duration-200 ease-linear hover:text-slate-50"
          >
            <Mail />
          </button>
        </section>
      )}
    </div>
  )
}
