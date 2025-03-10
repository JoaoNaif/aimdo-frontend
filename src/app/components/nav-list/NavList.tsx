import {
  ClipboardList,
  Crosshair,
  Goal,
  HandCoins,
  LayoutDashboard,
  LogOut,
} from 'lucide-react'
import { ListItem } from './components/ListItem'
import { SettingsOption } from './components/SettingsOption'

export function NavList() {
  return (
    <nav
      className={
        'flex w-[20%] flex-col justify-between bg-white px-10 py-6 dark:bg-slate-900'
      }
    >
      <div className="flex flex-col gap-8">
        <header className="flex items-center gap-1">
          <div>
            <Crosshair className="h-10 w-10 text-orange-500" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
            AIM.DO
          </h1>
        </header>

        <ul className="flex flex-col">
          <ListItem icon={<LayoutDashboard />} content="Dashboard" active={0} />
          <ListItem icon={<ClipboardList />} content="Tarefas" active={1} />
          <ListItem icon={<HandCoins />} content="Compras" active={2} />
          <ListItem icon={<Goal />} content="Metas" active={3} />
          <SettingsOption />
        </ul>
      </div>

      <footer className="flex cursor-pointer gap-2 text-slate-400 transition-colors duration-300 ease-linear hover:text-rose-500">
        <div>
          <LogOut />
        </div>
        <span className="font-bold">Log out</span>
      </footer>
    </nav>
  )
}
