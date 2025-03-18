'use-client'

import { useFormContext } from 'react-hook-form'

export function ModalDueDate() {
  const { register } = useFormContext()

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="relative mt-4 w-1/2 rounded-md border-2 border-slate-400">
      <h3 className="absolute left-4 top-[-10] bg-white px-1 text-sm font-bold text-slate-400">
        Data limite (Opcional)
      </h3>
      <input
        type="date"
        min={today}
        {...register('dueDate')}
        className="rounded-lg pb-1 pl-7 pt-2 text-gray-700 focus:outline-none"
      />
    </div>
  )
}
