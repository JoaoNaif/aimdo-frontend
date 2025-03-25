import { addCollaborator } from '@/app/api/add-collaborator'
import { fetchCollaborators } from '@/app/api/fetch-collaborators'
import { getEmailUser } from '@/app/api/get-email-user'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ArrowLeft, Mail, Search, User } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

interface ModalCollaboratorsProps {
  handleChangeActiveSide: (status: boolean) => void
  handleChangeModalCollaborators: (status: boolean) => void
  activeSide: boolean
  objectiveId: string
}

export function ModalCollaborators({
  handleChangeActiveSide,
  handleChangeModalCollaborators,
  activeSide,
  objectiveId,
}: ModalCollaboratorsProps) {
  const [email, setEmail] = useState('')

  const { data: collaborator, refetch } = useQuery({
    queryFn: () => getEmailUser({ email }),
    queryKey: ['user', email],
    enabled: false,
  })

  const { data: collaborators = [] } = useQuery({
    queryFn: () => fetchCollaborators({ objectiveId }),
    queryKey: ['collaborators', objectiveId],
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
    <main>
      <header className="flex flex-col gap-2">
        <div
          onClick={() => handleChangeModalCollaborators(activeSide)}
          className="flex cursor-pointer justify-end transition-colors duration-200 ease-linear hover:text-orange-500"
        >
          <ArrowLeft />
        </div>
        <h1 className={'text-center text-xl font-bold'}>
          Todos os colaboradores
        </h1>
        <ul className="flex border-t border-black py-1">
          <li
            onClick={() => handleChangeActiveSide(true)}
            className={`flex-1 cursor-pointer text-center font-bold transition-colors duration-200 ease-linear hover:text-orange-500 ${activeSide ? 'text-orange-500' : 'text-slate-900'}`}
          >
            Ver todos
          </li>
          <li
            onClick={() => handleChangeActiveSide(false)}
            className={`flex-1 cursor-pointer text-center font-bold transition-colors duration-200 ease-linear hover:text-orange-500 ${!activeSide ? 'text-orange-500' : 'text-slate-900'}`}
          >
            Adicionar
          </li>
        </ul>
      </header>

      {activeSide ? (
        <>
          {collaborators ? (
            <ul>
              {collaborators.map((item) => (
                <li key={item.id}>
                  <header className="flex gap-1 bg-orange-500 p-2">
                    <User className="h-6 w-6" />
                    <div className="flex flex-col">
                      <h3>{item.name}</h3>
                      <p>{item.email}</p>
                    </div>
                  </header>
                </li>
              ))}
            </ul>
          ) : (
            <p>Não existe colaboradores</p>
          )}
        </>
      ) : (
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
            <section className="relative mt-8 flex items-center gap-2 rounded-md bg-slate-800 p-2 text-slate-50">
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
                className="absolute right-0 top-0 flex h-full cursor-pointer items-center rounded-l-full rounded-r-md bg-orange-500 pl-6 pr-3 text-slate-800 transition-colors duration-200 ease-linear hover:text-slate-50"
              >
                <Mail />
              </button>
            </section>
          )}
        </div>
      )}
    </main>
  )
}
