import { Bell, Mail } from 'lucide-react'

interface NotificationEntity {
  id: number
  title: string
  content: string
}

export function NotificationSection() {
  const notifications: NotificationEntity[] = [
    {
      id: 1,
      title: 'Você tem uma nova notificação',
      content: 'Carlos te convidou para um novo objetivo',
    },
    {
      id: 2,
      title: 'Você tem uma nova notificação',
      content: 'Carlos te convidou para um novo objetivo',
    },
  ]

  return (
    <ul className="flex items-center gap-3">
      <li>
        <button className="relative rounded-full p-1 text-slate-800 transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white dark:text-white hover:dark:bg-white hover:dark:text-slate-800">
          <Bell className="h-7 w-7" />
          {notifications.length > 0 && (
            <span className="absolute right-[-8px] top-[-8px] rounded-full bg-red-500 px-2 py-1 text-xs font-bold">
              2
            </span>
          )}
        </button>
      </li>
      <li>
        <button className="relative rounded-full p-1 text-slate-800 transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white dark:text-white hover:dark:bg-white hover:dark:text-slate-800">
          <Mail className="h-7 w-7" />
          {notifications.length > 0 && (
            <span className="absolute right-[-8px] top-[-8px] rounded-full bg-red-500 px-2 py-1 text-xs font-bold">
              2
            </span>
          )}
        </button>
      </li>
    </ul>
  )
}
