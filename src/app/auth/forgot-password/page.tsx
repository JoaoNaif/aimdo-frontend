import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import forgot from '@/../public/forgot-password.png'
import Image from 'next/image'

export default function ForgotPassword() {
  return (
    <div className="flex h-screen items-center justify-center gap-10 bg-slate-50">
      <main className="flex flex-col gap-10">
        <header className="flex flex-col items-center justify-center">
          <Image className="mb-10 h-32 w-32" src={forgot} alt="" />
          <h1 className="text-4xl font-bold">Esqueceu sua senha?</h1>
          <p className="text-sm text-slate-500">
            Insira seu email abaixo, será enviado um link para redefinir a senha
          </p>
        </header>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="exemplo@email.com"
              className="rounded-full border-2 border-slate-300 px-4 py-1 outline-none transition-colors duration-200 ease-linear focus:border-orange-500"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-orange-500 py-2 font-bold text-slate-50 transition-colors duration-200 ease-linear hover:bg-orange-600"
          >
            Enviar Email
          </button>
          <Link
            href="/auth"
            className="flex cursor-pointer justify-center gap-2 transition-colors duration-200 ease-linear hover:text-orange-500"
          >
            <ChevronLeft />
            <span>Voltar para Login</span>
          </Link>
        </form>
      </main>
    </div>
  )
}
