import { fetchCollaborators } from '@/app/api/fetch-collaborators'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import { ListCollaborators } from './components/ModalCollaborators'
import { CollaboratorInvited } from './components/CollaboratorInvited'

interface ModalCollaboratorsProps {
  handleChangeActiveSide: (status: boolean) => void
  handleChangeModalCollaborators: (status: boolean, edit: boolean) => void
  activeSide: boolean
  objectiveId: string
}

export function ModalCollaborators({
  handleChangeActiveSide,
  handleChangeModalCollaborators,
  activeSide,
  objectiveId,
}: ModalCollaboratorsProps) {
  const { data: collaborators = [] } = useQuery({
    queryFn: () => fetchCollaborators({ objectiveId }),
    queryKey: ['collaborators', objectiveId],
  })

  return (
    <main>
      <header className="flex flex-col gap-2">
        <div
          onClick={() => handleChangeModalCollaborators(activeSide, false)}
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
            <ul className="mt-5 flex h-80 flex-col gap-2 overflow-y-auto">
              {collaborators.map((item) => (
                <ListCollaborators
                  key={item.id}
                  item={item}
                  objectiveId={objectiveId}
                />
              ))}
            </ul>
          ) : (
            <p>Não existe colaboradores</p>
          )}
        </>
      ) : (
        <CollaboratorInvited objectiveId={objectiveId} />
      )}
    </main>
  )
}
