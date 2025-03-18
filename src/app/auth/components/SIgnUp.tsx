import { registerUser } from '@/app/api/register-user'
import { useMutation } from '@tanstack/react-query'
import { AtSign, CircleUser, Eye, EyeClosed, Lock, Pen } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { z } from 'zod'

const signUpForm = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const [typingEmail, setTypingEmail] = useState(false)
  const [typingUsername, setTypingUsername] = useState(false)
  const [typingName, setTypingName] = useState(false)
  const [typingPassword, setTypingPassword] = useState(false)
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
        {!typingUsername && (
          <label
            htmlFor="username"
            className="absolute top-[-1px] flex gap-2 text-slate-300"
          >
            <CircleUser />
            <span>Username</span>
          </label>
        )}
        <input
          type="text"
          id="username"
          {...register('username')}
          className="w-full border-b-2 border-slate-300 bg-transparent pl-7 text-slate-900 outline-none focus:border-orange-500"
          onChange={(e) => setTypingUsername(e.target.value.length > 0)}
        />
      </div>
      <div className="relative">
        {!typingName && (
          <label
            htmlFor="name"
            className="absolute top-[-1px] flex gap-2 text-slate-300"
          >
            <Pen />
            <span>Name</span>
          </label>
        )}
        <input
          type="text"
          id="name"
          {...register('name')}
          className="w-full border-b-2 border-slate-300 bg-transparent pl-7 text-slate-900 outline-none focus:border-orange-500"
          onChange={(e) => setTypingName(e.target.value.length > 0)}
        />
      </div>
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
          {...register('email')}
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
          {...register('password')}
          className="w-full border-b-2 border-slate-300 bg-transparent pl-7 text-slate-900 outline-none focus:border-orange-500"
          onChange={(e) => setTypingPassword(e.target.value.length > 0)}
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
