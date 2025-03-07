import { useContext } from 'react'
import { Header } from './header/Header'
import { NavList } from './nav-list/NavList'
import { ThemeContext } from '../context/ThemeContext'
import { Content } from './content/Content'

export function Home() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme ? 'dark' : ''}>
      <div className={'flex h-screen'}>
        <NavList />
        <main className="flex h-full flex-1 flex-col gap-8 bg-slate-100 px-10 py-6 dark:bg-slate-700">
          <Header />
          <Content />
        </main>
      </div>
    </div>
  )
}
