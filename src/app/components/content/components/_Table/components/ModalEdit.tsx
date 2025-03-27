import { editObjective } from '@/app/api/edit-objective'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

export interface ModalEditProps {
  objectiveId: string
}

const editObjectiveForm = z.object({
  title: z.string().nullable(),
  descripion: z.string().nullable(),
  category: z.enum(['GOAL', 'TASK', 'BUY']).nullable(),
})

export type EditObjectiveFormSchema = z.infer<typeof editObjectiveForm>

export function ModalEdit({ objectiveId }: ModalEditProps) {
  const queryClient = useQueryClient()

  const editingObjective = useForm<EditObjectiveFormSchema>({
    resolver: zodResolver(editObjectiveForm),
    defaultValues: {
      title: null,
      descripion: null,
      category: null,
    },
  })

  const { register, handleSubmit } = editingObjective

  const { mutateAsync: editObjectiveFn } = useMutation({
    mutationFn: editObjective,
    onSuccess: () => {
        queryClient.invalidateQueries()
    }
  })

  async function handleEditObjective(data: EditObjectiveFormSchema) {
    try {
      await editObjectiveFn({
        objectiveId,
        title: data.title,
        description: data.descripion,
        category: data.category,
      })

      toast.success('Objetivo Atualizado')
    } catch {
      toast.error('Erro ao editar objetivo')
    }
  }

  return (
    <form onSubmit={handleSubmit(handleEditObjective)}>
      <input type="text" {...register('title')} />
      <input type="text" {...register('descripion')} />
      <input type="text" />
      <button type="submit">Atualizar</button>
    </form>
  )
}
