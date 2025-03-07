import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { ModalCategory } from './ModalCategory'
import { ModalUrgency } from './ModalUrgency'

const newTaskValidationSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.enum(['goal', 'task', 'buy']),
  urgency: z.enum(['high', 'medium', 'low']),
})

export type NewTaskValidationSchema = z.infer<typeof newTaskValidationSchema>

export function ModalForm() {
  const newTaskForm = useForm<NewTaskValidationSchema>({
    resolver: zodResolver(newTaskValidationSchema),
    defaultValues: {
      title: '',
      description: '',
      category: 'goal',
      urgency: 'medium',
    },
  })

  const { handleSubmit, register } = newTaskForm

  function handleCreateNewTask() {}

  return (
    <FormProvider {...newTaskForm}>
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(handleCreateNewTask)}
      >
        <div className="relative">
          <label
            className="absolute left-2 top-[-8] bg-white px-1 text-sm font-bold text-slate-400"
            htmlFor="title"
          >
            Título
          </label>
          <input
            type="text"
            id="title"
            {...register('title')}
            className="w-full rounded-md border-2 border-slate-400 px-3 py-1 outline-none focus:border-orange-500"
          />
        </div>

        <div className="relative">
          <label
            className="absolute left-2 top-[-8] bg-white px-1 text-sm font-bold text-slate-400"
            htmlFor="description"
          >
            Descrição
          </label>
          <textarea
            id="description"
            {...register('description')}
            className="h-24 w-full resize-none rounded-md border-2 border-slate-400 p-3 outline-none focus:border-orange-500"
          />
        </div>

        <ModalCategory />
        <ModalUrgency />

        <footer className="mt-4 flex justify-end border-t-2 border-slate-400 px-4 pt-4">
          <button
            type="submit"
            className="w-1/3 rounded-md bg-orange-500 p-2 font-bold text-white transition-colors duration-200 ease-linear hover:bg-orange-600"
          >
            Criar
          </button>
        </footer>
      </form>
    </FormProvider>
  )
}
