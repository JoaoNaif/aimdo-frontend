import { Mail, Check, X } from 'lucide-react'
import { NotificationEntity } from './NotificationSection'

export interface InviteProps {
  item: NotificationEntity
}

export function Invite({ item }: InviteProps) {
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
          <p className="text-sm text-slate-500">11 min ago</p>
        </header>
        <section className="flex flex-col gap-1 text-slate-500 dark:text-slate-600">
          <span className="text-sm">
            <strong>Objetivo:</strong> {item.title}
          </span>
          <span className="text-sm">
            <strong>Descritção:</strong> {item.content}
          </span>
        </section>
      </main>
      <footer className="flex flex-col gap-3 dark:text-white">
        <button
          title="Aceitar convite"
          className="rounded-full bg-emerald-300 p-1 font-bold transition-colors duration-200 ease-linear hover:bg-emerald-500 dark:bg-emerald-400 hover:dark:bg-emerald-600"
        >
          <Check />
        </button>
        <button
          title="Rejeitar convite"
          className="rounded-full bg-rose-300 p-1 font-bold transition-colors duration-200 ease-linear hover:bg-rose-500 dark:bg-rose-400 hover:dark:bg-rose-500"
        >
          <X />
        </button>
      </footer>
    </li>
  )
}
