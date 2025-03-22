import { FilterContent } from './_FilterContent/FilterContent'
import { useState } from 'react'
import { Filters, ValueFilterType } from '@/app/_types/FilterTypes'
import { DataTable } from './_Table/DataTable'
import { useQuery } from '@tanstack/react-query'
import { Objective } from '@/app/_types/Objective'
import { fetchTask } from '@/app/api/fetch-task'

export function Task() {
  const [valueFilter, setValueFilter] = useState<ValueFilterType>({
    status: 'PENDING',
    urgency: 'HIGH',
    order: 'asc',
  })

  const { data: tasks = [] } = useQuery({
    queryFn: fetchTask,
    queryKey: ['tasks'],
  })

  const taskList = tasks.filter((i) => i.category === 'TASK')

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

  console.log(taskList, valueFilter.status, valueFilter.urgency)

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
