'use client'

import { useState } from 'react'
import { SignIn } from './components/SignIn'
import { Crosshair } from 'lucide-react'
import { SignUp } from './components/SIgnUp'

export default function Auth() {
  const [login, setLogin] = useState(true)
  return (
    <div className="flex h-screen items-center bg-slate-50">
      <aside className="relative h-screen w-[40%] bg-slate-900">
        <nav className="absolute right-0 top-[30%] flex flex-col font-bold text-slate-50">
          <div
            className={`cursor-pointer rounded-l-lg px-8 py-5 ${login && 'bg-slate-50 text-orange-500'}`}
            onClick={() => setLogin(true)}
          >
            Entrar
          </div>
          <div
            className={`cursor-pointer rounded-l-lg px-8 py-5 ${!login && 'bg-slate-50 text-orange-500'}`}
            onClick={() => setLogin(false)}
          >
            Registrar
          </div>
        </nav>
      </aside>
      <main className="flex h-screen flex-1 flex-col items-center justify-evenly px-20">
        <header className="flex items-center justify-center font-bold">
          <Crosshair className="h-24 w-24 text-orange-500" />
          <p className="text-7xl text-slate-900">AIM.DO</p>
        </header>
        {login ? <SignIn /> : <SignUp />}
      </main>
    </div>
  )
}
