import { FilterContent } from './_FilterContent/FilterContent'
import { useState } from 'react'
import { ValueFilterType } from '@/app/_types/FilterTypes'
import { DataTable } from './_Table/DataTable'
import { useQuery } from '@tanstack/react-query'
import { fetchTask } from '@/app/api/fetch-task'
import { resultFilters } from '@/app/utils/FilterObjective'

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

  const filteredAndSorted = resultFilters(tasks, valueFilter)

  return (
    <div className="flex flex-col gap-5">
      <FilterContent setValueFilter={setValueFilter} />
      <DataTable list={filteredAndSorted} />
    </div>
  )
}
