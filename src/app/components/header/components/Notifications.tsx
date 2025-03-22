import { Bell } from 'lucide-react'
import { Notification } from '@/app/_types/Notification'

export interface NotificationProps {
  item: Notification
}

export function Notifications({ item }: NotificationProps) {
  return (
    <li className="flex items-start gap-2 rounded-md bg-slate-100 bg-opacity-80 p-4">
      <div className="bg rounded-full bg-slate-300 p-2 dark:bg-white">
        <Bell />
      </div>
      <main className="flex flex-1 flex-col justify-between pt-1">
        <header className="flex items-end gap-2">
          <h1 className="font-bold dark:text-slate-700">{item.title}</h1>
          <p className="text-sm text-slate-500">11 min ago</p>
        </header>
        <section className="flex flex-col gap-1 text-slate-500 dark:text-slate-600">
          <span className="text-sm">{item.content}</span>
        </section>
        <footer className="mt-2 cursor-pointer text-right font-bold text-slate-600 transition-colors duration-200 ease-linear hover:text-orange-500">
          Marcar como lida
        </footer>
      </main>
    </li>
  )
}
