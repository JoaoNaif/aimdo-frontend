import { ValueFilterType } from '@/app/_types/FilterTypes'
import { useState } from 'react'
import { FilterContent } from './_FilterContent/FilterContent'
import { DataTable } from './_Table/DataTable'
import { useQuery } from '@tanstack/react-query'
import { fetchBuys } from '@/app/api/fetch-buys'
import { resultFilters } from '@/app/utils/FilterObjective'

export function Buy() {
  const [valueFilter, setValueFilter] = useState<ValueFilterType>({
    status: 'PENDING',
    urgency: 'HIGH',
    order: 'asc',
  })

  const { data: goals = [] } = useQuery({
    queryFn: fetchBuys,
    queryKey: ['objectives', 'buy'],
  })

  const filteredAndSorted = resultFilters(goals, valueFilter)

  return (
    <div className="flex flex-col gap-5">
      <FilterContent setValueFilter={setValueFilter} />
      <DataTable list={filteredAndSorted} />
    </div>
  )
}
