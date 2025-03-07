import { DashboardAnalytics } from './Dashboard/DashboardAnalytics'
import { DashboardGraphics } from './Dashboard/DashboardGraphics'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-7">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          DASHBOARD
        </h1>
        <p className="text-sm text-orange-500">Bem vindo ao seu dashboard</p>
      </header>
      <DashboardAnalytics />
      <DashboardGraphics />
    </div>
  )
}
