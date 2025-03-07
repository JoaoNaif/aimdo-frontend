import { ArrowDown, ArrowUp, Search } from 'lucide-react'

interface DashboardItemProps {
  highlight: number
  percentage: number
}

export function DashboardItem({ highlight, percentage }: DashboardItemProps) {
  return (
    <li className="flex flex-1 flex-col gap-3 rounded-md bg-white p-5 dark:bg-slate-900">
      <main className="flex items-start justify-between gap-4">
        <div className="flex gap-2">
          <div className="h-14 w-1 rounded-full bg-orange-500" />
          <section className="flex flex-col py-1">
            <h3 className="text-sm font-bold text-slate-400">
              Objetivos completos
            </h3>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              {highlight}
            </span>
          </section>
        </div>
        <button className="rounded-md bg-orange-200 p-1 text-orange-500 dark:bg-orange-500 dark:text-orange-200">
          <Search className="h-5 w-5" />
        </button>
      </main>
      <footer className="text-sm">
        {percentage >= 0 ? (
          <span className="flex gap-1">
            <ArrowUp className="h-4 w-4 text-emerald-500" />
            <strong className="text-emerald-500">
              {`${percentage.toFixed(2)}%`}
            </strong>{' '}
            <p className="text-slate-400">desde no ultimo mês</p>
          </span>
        ) : (
          <span className="flex items-start gap-1">
            <ArrowDown className="h-4 w-4 text-rose-500" />
            <strong className="text-rose-500">
              {`${percentage.toFixed(2)}%`}
            </strong>{' '}
            <p className="text-slate-400">desde no ultimo mês</p>
          </span>
        )}
      </footer>
    </li>
  )
}
