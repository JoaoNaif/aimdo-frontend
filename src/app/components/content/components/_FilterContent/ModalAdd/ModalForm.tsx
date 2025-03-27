import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { ModalCategory } from './ModalCategory'
import { ModalUrgency } from './ModalUrgency'
import { ModalDueDate } from './ModalDueDate'
import { createObjective } from '@/app/api/create-objective'
import { toast } from 'sonner'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface ModalFormProps {
  handleCloseModal: () => void
}

const newTaskValidationSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.enum(['GOAL', 'TASK', 'BUY']),
  urgency: z.enum(['HIGH', 'MEDIUM', 'LOW']),
  dueDate: z.preprocess(
    (val) => (val === null ? null : new Date(val as string)),
    z.date().nullable()
  ),
})

export type NewTaskValidationSchema = z.infer<typeof newTaskValidationSchema>

export function ModalForm({ handleCloseModal }: ModalFormProps) {
  const queryClient = useQueryClient()

  const newTaskForm = useForm<NewTaskValidationSchema>({
    resolver: zodResolver(newTaskValidationSchema),
    defaultValues: {
      title: '',
      description: '',
      category: 'GOAL',
      urgency: 'MEDIUM',
      dueDate: null,
    },
  })

  const { handleSubmit, register } = newTaskForm

  const { mutateAsync: createObjectiveFn } = useMutation({
    mutationFn: createObjective,
  })

  async function handleCreateNewTask(data: NewTaskValidationSchema) {
    try {
      await createObjectiveFn({
        title: data.title,
        description: data.description,
        category: data.category,
        urgency: data.urgency,
        dueDate: data.dueDate,
      })

      toast.success('Objetivo Criado com sucesso')
      queryClient.invalidateQueries({
        queryKey: ['objectives', `${data.category.toLowerCase()}`],
      })
      handleCloseModal()
    } catch {
      toast.error('Erro ao criar o objetivo')
    }
  }

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
            className="w-full rounded-md border-2 border-slate-400 px-3 pb-1 pt-2 outline-none focus:border-orange-500"
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

        <div className="flex items-start gap-4">
          <ModalCategory />
          <ModalUrgency />
        </div>
        <ModalDueDate />

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
