import { products } from '@/app/mock/ProductMock'
import { DashboardColumnData } from './DashboradColumnData'

export function DashboardColumn() {
  const filterCompleteObjective = products.filter(
    (i) => i.completedDate !== null
  )

  function transformTimeInHours(createdAt: Date, completedDate: Date) {
    const diffInMs = completedDate.getTime() - createdAt.getTime()
    const diffInHours = diffInMs / (1000 * 60 * 60)
    return parseFloat(diffInHours.toFixed(2))
  }

  return (
    <div className="flex flex-1 flex-col gap-4 rounded-md bg-white p-4 dark:bg-slate-900">
      <header className="flex items-center justify-between">
        <h1 className="font-bold text-slate-400">
          Seu tempo para concluir um objetivo
        </h1>
        <div>...</div>
      </header>
      <DashboardColumnData
        transformTimeInHours={transformTimeInHours}
        items={filterCompleteObjective}
      />
    </div>
  )
}
