import { ThemeContext } from '@/app/context/ThemeContext'
import { Moon, Sun } from 'lucide-react'
import { useContext } from 'react'

export function ButtonThemeToggle() {
  const { theme } = useContext(ThemeContext)

  return <button>{theme ? <Sun /> : <Moon />}</button>
}
