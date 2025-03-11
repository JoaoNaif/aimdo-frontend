import { ChevronDown, ChevronUp, Settings, User } from 'lucide-react'
import { ButtonThemeToggle } from '../../header/components/ButtonThemeToggle'
import { useContext, useState } from 'react'
import { ThemeContext } from '@/app/context/ThemeContext'

export function SettingsOption() {
  const { toggleTheme } = useContext(ThemeContext)

  const [settingOpen, setSettingOpen] = useState(false)

  return (
    <li className="flex flex-col gap-4 p-4">
      <header
        className={
          'flex cursor-pointer justify-between rounded-md text-slate-400 transition-colors duration-300 ease-linear hover:text-slate-800 hover:dark:text-white'
        }
        onClick={() => setSettingOpen(!settingOpen)}
      >
        <div className="flex gap-2">
          <Settings />
          <span>Configurações</span>
        </div>
        {settingOpen ? <ChevronUp /> : <ChevronDown />}
      </header>
      <ul
        className={`flex-col gap-3 text-slate-800 dark:text-white ${settingOpen ? 'flex' : 'hidden'} transition-all duration-200 ease-linear`}
      >
        <li className="flex cursor-pointer gap-2">
          <User />
          <span>Meu Perfil</span>
        </li>
        <li
          className="flex cursor-pointer items-center gap-2 transition-colors duration-200 ease-linear hover:text-orange-500"
          onClick={toggleTheme}
        >
          <ButtonThemeToggle />
          <span>Trocar tema</span>
        </li>
      </ul>
    </li>
  )
}
