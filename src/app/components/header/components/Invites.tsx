import { Mail, Check, X } from 'lucide-react'
import { Invite } from '@/app/_types/Invite'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { acceptInvite } from '@/app/api/accept-invite'
import { declineInvite } from '@/app/api/decline-invite'

export interface InviteProps {
  item: Invite
}

export function Invites({ item }: InviteProps) {
  const queryClient = useQueryClient()

  const created = new Date(item.createdAt)
  const result = formatDistanceToNow(created, { addSuffix: true, locale: ptBR })

  const { mutateAsync: acceptInviteFn, isPending: isAcceptingInvite } =
    useMutation({
      mutationFn: acceptInvite,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['invites'],
        })
      },
    })

  const { mutateAsync: declineInviteFn, isPending: isDecliningInvite } =
    useMutation({
      mutationFn: declineInvite,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['invites'],
        })
      },
    })

  return (
    <li className="flex items-start gap-2 rounded-md bg-slate-100 bg-opacity-80 p-4">
      <div className="bg rounded-full bg-slate-300 p-2 dark:bg-white">
        <Mail />
      </div>
      <main className="flex flex-1 flex-col justify-between gap-5 pt-1">
        <header className="flex items-end gap-2">
          <h1 className="text-lg font-bold dark:text-slate-700">
            Novo convite
          </h1>
          <p className="text-sm text-slate-500">{result}</p>
        </header>
        <section className="flex flex-col gap-1 text-slate-500 dark:text-slate-600">
          <span className="text-sm">
            <strong>Objetivo:</strong> {item.objective.title}
          </span>
          <span className="text-sm">
            <strong>Descritção:</strong> {item.objective.description}
          </span>
        </section>
      </main>
      <footer className="flex flex-col gap-3 dark:text-white">
        <button
          disabled={isAcceptingInvite}
          onClick={() => acceptInviteFn({ inviteId: item.id })}
          title="Aceitar convite"
          className="rounded-full bg-emerald-300 p-1 font-bold transition-colors duration-200 ease-linear hover:bg-emerald-500 dark:bg-emerald-400 hover:dark:bg-emerald-600"
        >
          <Check />
        </button>
        <button
          disabled={isDecliningInvite}
          onClick={() =>
            declineInviteFn({
              inviteId: item.id,
              collaboratorId: item.collaboratorId,
            })
          }
          title="Rejeitar convite"
          className="rounded-full bg-rose-300 p-1 font-bold transition-colors duration-200 ease-linear hover:bg-rose-500 dark:bg-rose-400 hover:dark:bg-rose-500"
        >
          <X />
        </button>
      </footer>
    </li>
  )
}
