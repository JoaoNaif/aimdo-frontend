import { products, ProductType } from '@/app/mock/ProductMock'
import { DashboardItem } from './DashboardItem'

export function DashboardAnalytics() {
  const currentMonth = new Date()
  const lastMonth = currentMonth.getMonth() - 1

  function percentageObjetiveCompleted(list: ProductType[]) {
    const quantityCurrentMonthCompleted = list.filter(
      (i) =>
        i.status === 'completed' &&
        i.createdAt.getMonth() === currentMonth.getMonth()
    ).length

    const quantityLastMonthCompleted = list.filter(
      (i) => i.status === 'completed' && i.createdAt.getMonth() === lastMonth
    ).length

    const difference =
      quantityCurrentMonthCompleted - quantityLastMonthCompleted

    const percentage = (difference / quantityLastMonthCompleted) * 100

    return percentage
  }

  function quantityCurrentMonthCompleted(list: ProductType[]) {
    const quantityCurrentMonthCompleted = list.filter(
      (i) =>
        i.status === 'completed' &&
        i.createdAt.getMonth() === currentMonth.getMonth()
    ).length

    return quantityCurrentMonthCompleted
  }

  return (
    <ul className="flex justify-between gap-4">
      <DashboardItem
        highlight={quantityCurrentMonthCompleted(products)}
        percentage={percentageObjetiveCompleted(products)}
      />
      <DashboardItem
        highlight={quantityCurrentMonthCompleted(products)}
        percentage={percentageObjetiveCompleted(products)}
      />
      <DashboardItem
        highlight={quantityCurrentMonthCompleted(products)}
        percentage={percentageObjetiveCompleted(products)}
      />
      <DashboardItem
        highlight={quantityCurrentMonthCompleted(products)}
        percentage={percentageObjetiveCompleted(products)}
      />
    </ul>
  )
}
