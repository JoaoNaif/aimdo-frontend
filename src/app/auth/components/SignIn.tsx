'use client'

import { AtSign, Eye, EyeClosed, Lock } from 'lucide-react'
import { useState } from 'react'
import { GoogleLogo } from '@phosphor-icons/react'
import Link from 'next/link'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { AutehnticateUser } from '@/app/api/authenticate-user'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

export default function SignIn() {
  const [visiblePass, setVisiblePass] = useState(false)

  const router = useRouter()

  const { register, handleSubmit } = useForm<SignInForm>()

  const { mutateAsync: authenticateUserFn } = useMutation({
    mutationFn: AutehnticateUser,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      const response = await authenticateUserFn({
        email: data.email,
        password: data.password,
      })

      sessionStorage.setItem('access_token', response.access_token)

      toast.success('Login efetuado')
      router.push('/')
    } catch {
      toast.error('Erro ao fazer login')
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="flex w-full flex-col gap-10 px-3"
      >
        <div className="relative">
          <label
            htmlFor="email"
            className="absolute top-[-1px] flex gap-2 text-slate-300"
          >
            <AtSign />
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="w-full border-b-2 border-slate-300 bg-transparent pl-7 text-slate-900 outline-none focus:border-orange-500"
            placeholder="E-mail"
          />
        </div>
        <div className="relative">
          <div
            className="absolute right-2 text-slate-300"
            onClick={() => setVisiblePass(!visiblePass)}
          >
            {visiblePass ? <EyeClosed /> : <Eye />}
          </div>
          <label
            htmlFor="password"
            className="absolute top-[-1px] z-0 flex gap-2 text-slate-300"
          >
            <Lock />
          </label>
          <input
            type={visiblePass ? 'text' : 'password'}
            id="password"
            {...register('password')}
            placeholder="Senha"
            className="z-10 w-full border-b-2 border-slate-300 bg-transparent pl-7 text-slate-900 outline-none focus:border-orange-500"
          />
        </div>
        <div className="flex items-end justify-between">
          <Link
            href="/auth/forgot-password"
            className="cursor-pointer text-slate-900 hover:text-orange-500 hover:underline"
          >
            Esqueceu a senha?
          </Link>
          <button
            type="submit"
            className="rounded-lg bg-orange-500 px-6 py-2 text-lg font-bold text-slate-50 transition-colors duration-200 ease-linear hover:bg-orange-600"
          >
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
