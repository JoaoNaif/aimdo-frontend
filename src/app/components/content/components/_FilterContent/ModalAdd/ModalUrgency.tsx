import { ClockArrowUp, Hourglass, TimerOff } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

export function ModalUrgency() {
  const { register } = useFormContext()

  return (
    <div className="mt-4 flex flex-col">
      <section className="relative mb-4 mt-2">
        <h3 className="absolute left-4 top-[-10] bg-white px-1 text-sm font-bold text-slate-400">
          Urgência
        </h3>
        <div className="h-1 w-full border-t-2 border-slate-400" />
      </section>
      <ul className="flex items-center justify-center px-4">
        <li className="flex flex-1">
          <input
            type="radio"
            value="high"
            id="high"
            {...register('urgency')}
            className="peer hidden"
          />
          <label
            className={
              'flex w-full cursor-pointer items-center justify-between rounded-sm p-3 text-center font-bold text-slate-300 transition-colors duration-200 ease-linear hover:border-rose-500 hover:bg-rose-200 hover:text-rose-500 peer-checked:border-rose-500 peer-checked:bg-rose-200 peer-checked:text-rose-500'
            }
            htmlFor="high"
          >
            <h3>Alta</h3>
            <TimerOff />
          </label>
        </li>

        <li className="flex flex-1">
          <input
            type="radio"
            value="medium"
            id="medium"
            {...register('urgency')}
            className="peer hidden"
          />
          <label
            className={
              'flex w-full cursor-pointer items-center justify-between rounded-sm p-3 text-center font-bold text-slate-300 transition-colors duration-200 ease-linear hover:border-indigo-500 hover:bg-indigo-200 hover:text-indigo-500 peer-checked:border-indigo-500 peer-checked:bg-indigo-200 peer-checked:text-indigo-500'
            }
            htmlFor="medium"
          >
            <h3>Média</h3>
            <Hourglass />
          </label>
        </li>

        <li className="flex flex-1">
          <input
            type="radio"
            value="low"
            id="low"
            {...register('urgency')}
            className="peer hidden"
          />
          <label
            className={
              'flex w-full cursor-pointer items-center justify-between rounded-sm p-3 text-center font-bold text-slate-300 transition-colors duration-200 ease-linear hover:border-emerald-500 hover:bg-emerald-200 hover:text-emerald-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-200 peer-checked:text-emerald-500'
            }
            htmlFor="low"
          >
            <h3>Baixa</h3>
            <ClockArrowUp />
          </label>
        </li>
      </ul>
    </div>
  )
}
