import { ThemeContext } from '@/app/context/ThemeContext'
import { Moon, Sun } from 'lucide-react'
import { useContext } from 'react'

export function ButtonThemeToggle() {
  const { theme } = useContext(ThemeContext)

  return (
    <button
      className={
        'rounded-full text-slate-800 transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white dark:text-white hover:dark:bg-white hover:dark:text-slate-800'
      }
    >
      {theme ? <Sun /> : <Moon />}
    </button>
  )
}
