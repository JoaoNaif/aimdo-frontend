'use client'

import { CircleUser, Crosshair, Lock } from 'lucide-react'
import { useState } from 'react'

export function SignIn() {
  const [typingEmail, setTypingEmail] = useState(false)
  const [typingPassword, setTypingPassword] = useState(false)

  return (
    <main className="flex h-screen flex-1 flex-col items-center justify-evenly px-20">
      <header className="flex items-center justify-center font-bold">
        <Crosshair className="h-24 w-24 text-orange-500" />
        <p className="text-7xl text-slate-900">AIM.DO</p>
      </header>
      <form className="flex w-full flex-col gap-10 px-3">
        <div className="relative">
          {!typingEmail && (
            <label
              htmlFor="email"
              className="absolute top-[-4px] flex gap-2 text-slate-300"
            >
              <CircleUser />
              <span>E-mail</span>
            </label>
          )}
          <input
            type="email"
            id="email"
            className="w-full border-b-2 border-slate-300 pl-7 text-slate-900 outline-none"
            onChange={(e) => setTypingEmail(e.target.value.length > 0)}
          />
        </div>
        <div className="relative">
          {!typingPassword && (
            <label
              htmlFor="password"
              className="absolute top-[-4px] flex gap-2 text-slate-300"
            >
              <Lock />
              <span>Senha</span>
            </label>
          )}
          <input
            type="password"
            id="password"
            className="w-full border-b-2 border-slate-300 pl-7 text-slate-900 outline-none"
            onChange={(e) => setTypingPassword(e.target.value.length > 0)}
          />
        </div>
        <div className="flex items-end justify-between">
          <p className="cursor-pointer text-slate-900 hover:text-orange-500 hover:underline">
            Esqueceu a senha?
          </p>
          <button className="rounded-lg bg-orange-500 px-6 py-2 text-lg font-bold text-slate-50">
            Enviar
          </button>
        </div>
      </form>
      <footer>
        <ul>
          <li></li>
        </ul>
      </footer>
    </main>
  )
}
