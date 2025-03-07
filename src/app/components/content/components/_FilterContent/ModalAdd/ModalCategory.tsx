import { useFormContext } from 'react-hook-form'

export function ModalCategory() {
  const { register } = useFormContext()

  return (
    <div className="flex flex-col">
      <section className="relative mb-4 mt-2">
        <h3 className="absolute left-4 top-[-10] bg-white px-1 text-sm font-bold text-slate-400">
          Categoria
        </h3>
        <div className="h-1 w-full border-t-2 border-slate-400" />
      </section>
      <ul className="flex items-center justify-evenly gap-4">
        <li className="flex w-24">
          <input
            type="radio"
            value="task"
            id="task"
            {...register('category')}
            className="peer hidden"
          />
          <label
            className={
              'w-full cursor-pointer rounded-sm border border-slate-400 p-2 text-center font-bold text-slate-400 transition-colors duration-200 ease-linear hover:border-orange-500 hover:bg-orange-200 hover:text-orange-500 peer-checked:border-orange-500 peer-checked:bg-orange-200 peer-checked:text-orange-500'
            }
            htmlFor="task"
          >
            Tarefa
          </label>
        </li>

        <li className="flex w-24">
          <input
            type="radio"
            value="goal"
            id="goal"
            {...register('category')}
            className="peer hidden"
          />
          <label
            className={
              'w-full cursor-pointer rounded-sm border border-slate-400 p-2 text-center font-bold text-slate-400 transition-colors duration-200 ease-linear hover:border-orange-500 hover:bg-orange-200 hover:text-orange-500 peer-checked:border-orange-500 peer-checked:bg-orange-200 peer-checked:text-orange-500'
            }
            htmlFor="goal"
          >
            Meta
          </label>
        </li>

        <li className="flex w-24">
          <input
            type="radio"
            value="buy"
            id="buy"
            {...register('category')}
            className="peer hidden"
          />
          <label
            className={
              'w-full cursor-pointer rounded-sm border border-slate-400 p-2 text-center font-bold text-slate-400 transition-colors duration-200 ease-linear hover:border-orange-500 hover:bg-orange-200 hover:text-orange-500 peer-checked:border-orange-500 peer-checked:bg-orange-200 peer-checked:text-orange-500'
            }
            htmlFor="buy"
          >
            Compra
          </label>
        </li>
      </ul>
    </div>
  )
}
