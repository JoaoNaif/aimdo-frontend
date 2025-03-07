import { ThemeContext } from '@/app/context/ThemeContext'
import { useContext } from 'react'
import { ButtonThemeToggle } from './components/ButtonThemeToggle'

import rott from '@/../public/rottweiler.webp'
import Image from 'next/image'
import { Bell, Search } from 'lucide-react'

export function Header() {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <header className={'flex items-center gap-5'}>
      <div className="relative flex-1">
        <div className="absolute left-4 top-[50%] translate-y-[-50%]">
          <Search className="h-7 w-7 text-slate-300 dark:text-slate-500" />
        </div>
        <input
          type="text"
          className="w-full rounded-full py-2 pl-16 placeholder:text-slate-300 placeholder:dark:text-slate-500"
          placeholder="Procurar"
        />
      </div>
      <ul className="flex items-center gap-3">
        <li>
          <button className="rounded-full p-1 text-slate-800 transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white dark:text-white hover:dark:bg-white hover:dark:text-slate-800">
            <Bell className="h-7 w-7" />
          </button>
        </li>
        <li onClick={toggleTheme}>
          <ButtonThemeToggle />
        </li>
      </ul>
      <article className="flex items-center gap-2">
        <Image src={rott} alt="" className="h-11 w-11 rounded-full" />
        <div className="flex flex-col">
          <h1 className="font-bold text-slate-800 dark:text-white">
            João Naif
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-200">
            joaonaif@gmail.com
          </p>
        </div>
      </article>
    </header>
  )
}
