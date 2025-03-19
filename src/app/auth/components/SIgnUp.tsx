'use client'

import { registerUser } from '@/app/api/register-user'
import { useMutation } from '@tanstack/react-query'
import { AtSign, CircleUser, Eye, EyeClosed, Lock, Pen } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { z } from 'zod'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signUpForm = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export default function SignUp() {
  const [visiblePass, setVisiblePass] = useState(false)

  const { register, handleSubmit } = useForm<SignUpForm>()

  const { mutateAsync: registerUserFn } = useMutation({
    mutationFn: registerUser,
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      await registerUserFn({
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
      })

      toast.success('Usuário cadastrado com sucesso')
    } catch {
      toast.error('Erro ao cadastrar usuário')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className="flex w-full flex-col gap-10 px-3"
    >
      <div className="relative">
        <label
          htmlFor="username"
          className="absolute top-[-1px] flex gap-2 text-slate-300"
        >
          <CircleUser />
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          {...register('username')}
          className="w-full border-b-2 border-slate-300 bg-transparent pl-7 text-slate-900 outline-none focus:border-orange-500"
        />
      </div>
      <div className="relative">
        <label
          htmlFor="name"
          className="absolute top-[-1px] flex gap-2 text-slate-300"
        >
          <Pen />
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          placeholder="Name"
          className="w-full border-b-2 border-slate-300 bg-transparent pl-7 text-slate-900 outline-none focus:border-orange-500"
        />
      </div>
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
          placeholder="E-mail"
          {...register('email')}
          className="w-full border-b-2 border-slate-300 bg-transparent pl-7 text-slate-900 outline-none focus:border-orange-500"
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
          className="absolute top-[-1px] flex gap-2 text-slate-300"
        >
          <Lock />
        </label>
        <input
          type={visiblePass ? 'text' : 'password'}
          id="password"
          {...register('password')}
          placeholder="Senha"
          className="w-full border-b-2 border-slate-300 bg-transparent pl-7 text-slate-900 outline-none focus:border-orange-500"
        />
      </div>
      <div className="flex items-end justify-end">
        <button
          type="submit"
          className="rounded-lg bg-orange-500 px-6 py-2 text-lg font-bold text-slate-50 transition-colors duration-200 ease-linear hover:bg-orange-600"
        >
          Criar Conta
        </button>
      </div>
    </form>
  )
}
