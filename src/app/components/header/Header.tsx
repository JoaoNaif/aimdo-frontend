import rott from '@/../public/rottweiler.webp'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { NotificationSection } from './components/NotificationSection'

export function Header() {
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
      <NotificationSection />
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
