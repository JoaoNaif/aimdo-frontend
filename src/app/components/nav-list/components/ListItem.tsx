import { OptionContext } from '@/app/context/OptionContext'
import { ReactNode, useContext } from 'react'

interface ListItemProps {
  icon: ReactNode
  content: string
  active: number
}

export function ListItem({ icon, content, active }: ListItemProps) {
  const { option, changeOption } = useContext(OptionContext)

  return (
    <li
      onClick={() => changeOption(active)}
      className={`flex cursor-pointer gap-2 rounded-md p-4 text-slate-400 transition-colors duration-300 ease-linear ${active === option ? 'bg-orange-500 text-slate-700 dark:text-white' : 'hover:text-slate-800 hover:dark:text-white'}`}
    >
      <div>{icon}</div>
      <span>{content}</span>
    </li>
  )
}
