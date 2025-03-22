import { ValueFilterType } from '@/app/_types/FilterTypes'
import { useState } from 'react'
import { FilterContent } from './_FilterContent/FilterContent'
import { DataTable } from './_Table/DataTable'
import { useQuery } from '@tanstack/react-query'
import { FetchGoals } from '@/app/api/fetch-goals'
import { resultFilters } from '@/app/utils/FilterObjective'

export function Goal() {
  const [valueFilter, setValueFilter] = useState<ValueFilterType>({
    status: 'PENDING',
    urgency: 'HIGH',
    order: 'asc',
  })

  const { data: goals = [] } = useQuery({
    queryFn: FetchGoals,
    queryKey: ['goals'],
  })

  const filteredAndSorted = resultFilters(goals, valueFilter)

  return (
    <div className="flex flex-col gap-5">
      <FilterContent setValueFilter={setValueFilter} />
      <DataTable list={filteredAndSorted} />
    </div>
  )
}
