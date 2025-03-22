import { BadgeAlert, ClockArrowUp, Hourglass } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

export function ModalUrgency() {
  const { register } = useFormContext()

  return (
    <div className="flex flex-1 flex-col">
      <ul className="relative flex flex-col items-center justify-center rounded-md border-2 border-slate-400 pt-3">
        <h3 className="absolute left-4 top-[-10] bg-white px-1 text-sm font-bold text-slate-400">
          Urgência
        </h3>
        <li className="flex w-full flex-1">
          <input
            type="radio"
            value="HIGH"
            id="high"
            {...register('urgency')}
            className="peer hidden"
          />
          <label
            className={
              'flex w-full cursor-pointer items-center justify-start gap-3 rounded-sm p-2 text-center font-bold text-slate-300 transition-colors duration-200 ease-linear hover:border-rose-500 hover:bg-rose-200 hover:text-rose-500 peer-checked:border-rose-500 peer-checked:bg-rose-200 peer-checked:text-rose-500'
            }
            htmlFor="high"
          >
            <BadgeAlert />
            <h3>Alta</h3>
          </label>
        </li>

        <li className="flex w-full flex-1">
          <input
            type="radio"
            value="MEDIUM"
            id="medium"
            {...register('urgency')}
            className="peer hidden"
          />
          <label
            className={
              'flex w-full cursor-pointer items-center justify-start gap-3 rounded-sm p-2 text-center font-bold text-slate-300 transition-colors duration-200 ease-linear hover:border-indigo-500 hover:bg-indigo-200 hover:text-indigo-500 peer-checked:border-indigo-500 peer-checked:bg-indigo-200 peer-checked:text-indigo-500'
            }
            htmlFor="medium"
          >
            <Hourglass />
            <h3>Média</h3>
          </label>
        </li>

        <li className="flex w-full flex-1">
          <input
            type="radio"
            value="LOW"
            id="low"
            {...register('urgency')}
            className="peer hidden"
          />
          <label
            className={
              'flex w-full cursor-pointer items-center justify-start gap-3 rounded-sm p-2 text-center font-bold text-slate-300 transition-colors duration-200 ease-linear hover:border-emerald-500 hover:bg-emerald-200 hover:text-emerald-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-200 peer-checked:text-emerald-500'
            }
            htmlFor="low"
          >
            <ClockArrowUp />
            <h3>Baixa</h3>
          </label>
        </li>
      </ul>
    </div>
  )
}
