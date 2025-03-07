import { products } from '@/app/mock/ProductMock'
import { DashboardPieData } from './DashboardPieData'
import { useState } from 'react'

export function DashboardPie() {
  const [dateStatus, setDateStatus] = useState(0)

  const allTime = products
  const currentYear = products.filter(
    (i) => i.createdAt.getFullYear() === new Date().getFullYear()
  )

  const currentMonth = products.filter(
    (i) => i.createdAt.getMonth() === new Date().getMonth()
  )

  function handleChangeDateStatus(num: number) {
    setDateStatus(num)
  }

  return (
    <div className="w-[40%] rounded-md bg-white p-4 dark:bg-slate-900">
      <header className="flex justify-between">
        <h1 className="font-bold text-slate-400">
          Status de seus objetivos
          {dateStatus === 0 && ' desse mês'}
          {dateStatus === 1 && ' desse ano'}
          {dateStatus === 2 && ' de todos os tempos'}
        </h1>
        <ul className="flex gap-1">
          <li
            onClick={() => handleChangeDateStatus(0)}
            className={`h-3 w-3 rounded-full border border-slate-400 ${dateStatus === 0 && 'border-orange-500 bg-orange-500'}`}
          ></li>
          <li
            onClick={() => handleChangeDateStatus(1)}
            className={`h-3 w-3 rounded-full border border-slate-400 ${dateStatus === 1 && 'border-orange-500 bg-orange-500'}`}
          ></li>
          <li
            onClick={() => handleChangeDateStatus(2)}
            className={`h-3 w-3 rounded-full border border-slate-400 ${dateStatus === 2 && 'border-orange-500 bg-orange-500'}`}
          ></li>
        </ul>
      </header>
      <div className="flex items-center justify-around">
        {dateStatus === 0 && <DashboardPieData objetives={currentMonth} />}
        {dateStatus === 1 && <DashboardPieData objetives={currentYear} />}
        {dateStatus === 2 && <DashboardPieData objetives={allTime} />}
      </div>
    </div>
  )
}
