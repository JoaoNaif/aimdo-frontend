import { useFormContext } from 'react-hook-form'

export function ModalCategory() {
  const { register } = useFormContext()

  return (
    <div className="flex flex-1 flex-col">
      <ul className="relative flex flex-col items-center justify-evenly rounded-md border-2 border-slate-400 pt-3">
        <h3 className="absolute left-4 top-[-10] bg-white px-1 text-sm font-bold text-slate-400">
          Categoria
        </h3>
        <li className="flex w-full">
          <input
            type="radio"
            value="TASK"
            id="task"
            {...register('category')}
            className="peer hidden"
          />
          <label
            className={
              'w-full cursor-pointer rounded-sm p-2 text-center font-bold text-slate-400 transition-colors duration-200 ease-linear hover:border-orange-500 hover:bg-orange-200 hover:text-orange-500 peer-checked:border-orange-500 peer-checked:bg-orange-200 peer-checked:text-orange-500'
            }
            htmlFor="task"
          >
            Tarefa
          </label>
        </li>

        <li className="flex w-full">
          <input
            type="radio"
            value="GOAL"
            id="goal"
            {...register('category')}
            className="peer hidden"
          />
          <label
            className={
              'w-full cursor-pointer rounded-sm p-2 text-center font-bold text-slate-400 transition-colors duration-200 ease-linear hover:border-orange-500 hover:bg-orange-200 hover:text-orange-500 peer-checked:border-orange-500 peer-checked:bg-orange-200 peer-checked:text-orange-500'
            }
            htmlFor="goal"
          >
            Meta
          </label>
        </li>

        <li className="flex w-full">
          <input
            type="radio"
            value="BUY"
            id="buy"
            {...register('category')}
            className="peer hidden"
          />
          <label
            className={
              'w-full cursor-pointer rounded-sm p-2 text-center font-bold text-slate-400 transition-colors duration-200 ease-linear hover:border-orange-500 hover:bg-orange-200 hover:text-orange-500 peer-checked:border-orange-500 peer-checked:bg-orange-200 peer-checked:text-orange-500'
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
