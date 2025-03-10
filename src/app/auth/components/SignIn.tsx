'use client'

import { AtSign, Eye, EyeClosed, Lock } from 'lucide-react'
import { useState } from 'react'
import { GoogleLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export function SignIn() {
  const [typingEmail, setTypingEmail] = useState(false)
  const [typingPassword, setTypingPassword] = useState(false)
  const [visiblePass, setVisiblePass] = useState(false)

  return (
    <>
      <form className="flex w-full flex-col gap-10 px-3">
        <div className="relative">
          {!typingEmail && (
            <label
              htmlFor="email"
              className="absolute top-[-1px] flex gap-2 text-slate-300"
            >
              <AtSign />
              <span>E-mail</span>
            </label>
          )}
          <input
            type="email"
            id="email"
            className="w-full border-b-2 border-slate-300 bg-transparent pl-7 text-slate-900 outline-none focus:border-orange-500"
            onChange={(e) => setTypingEmail(e.target.value.length > 0)}
          />
        </div>
        <div className="relative">
          <div
            className="absolute right-2 text-slate-300"
            onClick={() => setVisiblePass(!visiblePass)}
          >
            {visiblePass ? <EyeClosed /> : <Eye />}
          </div>
          {!typingPassword && (
            <label
              htmlFor="password"
              className="absolute top-[-1px] flex gap-2 text-slate-300"
            >
              <Lock />
              <span>Senha</span>
            </label>
          )}
          <input
            type={visiblePass ? 'text' : 'password'}
            id="password"
            className="w-full border-b-2 border-slate-300 bg-transparent pl-7 text-slate-900 outline-none focus:border-orange-500"
            onChange={(e) => setTypingPassword(e.target.value.length > 0)}
          />
        </div>
        <div className="flex items-end justify-between">
          <Link
            href="/auth/forgot-password"
            className="cursor-pointer text-slate-900 hover:text-orange-500 hover:underline"
          >
            Esqueceu a senha?
          </Link>
          <button className="rounded-lg bg-orange-500 px-6 py-2 text-lg font-bold text-slate-50 transition-colors duration-200 ease-linear hover:bg-orange-600">
            Entrar
          </button>
        </div>
      </form>
      <footer className="flex w-full flex-col gap-16">
        <div className="relative h-[2px] bg-slate-300">
          <h3 className="absolute left-1/2 top-[-10px] -translate-x-1/2 bg-slate-50 px-2 font-bold text-slate-300">
            Ou entrar com
          </h3>
        </div>
        <ul className="flex justify-center">
          <li className="flex w-[30%] cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-600 p-2 text-slate-50 transition-colors duration-200 ease-linear hover:bg-red-700">
            <GoogleLogo weight="bold" size={30} />
            <span className="font-bold">Google</span>
          </li>
        </ul>
      </footer>
    </>
  )
}
