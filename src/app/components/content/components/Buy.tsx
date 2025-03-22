import { Filters, ValueFilterType } from '@/app/_types/FilterTypes'
import { useState } from 'react'
import { FilterContent } from './_FilterContent/FilterContent'
import { DataTable } from './_Table/DataTable'
import { useQuery } from '@tanstack/react-query'
import { fetchBuys } from '@/app/api/fetch-buys'
import { Objective } from '@/app/_types/Objective'

export function Buy() {
  const [valueFilter, setValueFilter] = useState<ValueFilterType>({
    status: 'PENDING',
    urgency: 'HIGH',
    order: 'asc',
  })

  const { data: goals = [] } = useQuery({
    queryFn: fetchBuys,
    queryKey: ['buys'],
  })

  const taskList = goals.filter((i) => i.category === 'BUY')

  function sortProducts(items: Objective[], order: string = 'asc') {
    return [...items].sort((a, b) => {
      const valueA = a.createdAt
      const valueB = b.createdAt

      if (order === 'asc') return valueA > valueB ? 1 : -1
      return valueA < valueB ? 1 : -1
    })
  }

  function filterProducts(items: Objective[], filters: Filters) {
    return items.filter(
      (i) => i.status === filters.status && i.urgency === filters.urgency
    )
  }

  const filteredAndSorted = sortProducts(
    filterProducts(taskList, {
      status: valueFilter.status ?? '',
      urgency: valueFilter.urgency ?? '',
    }),
    valueFilter.order
  )

  function getFilters(values: ValueFilterType) {
    setValueFilter((prev) => ({
      order: values.order ?? prev.order,
      status: values.status ?? prev.status,
      urgency: values.urgency ?? prev.urgency,
    }))
  }

  return (
    <div className="flex flex-col gap-5">
      <FilterContent getFilters={getFilters} />
      <DataTable list={filteredAndSorted} />
    </div>
  )
}
