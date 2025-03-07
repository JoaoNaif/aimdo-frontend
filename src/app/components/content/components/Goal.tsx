import { ValueFilterType, Filters } from '@/app/_types/FilterTypes'
import { products, ProductType } from '@/app/mock/ProductMock'
import { useState } from 'react'
import { FilterContent } from './_FilterContent/FilterContent'
import { DataTable } from './_Table/DataTable'

export function Goal() {
  const [valueFilter, setValueFilter] = useState<ValueFilterType>({
    status: 'pending',
    urgency: 'HIGH',
    order: 'asc',
  })

  const taskList = products.filter((i) => i.category === 'GOAL')

  function sortProducts(items: ProductType[], order: string = 'asc') {
    return [...items].sort((a, b) => {
      const valueA = a.createdAt
      const valueB = b.createdAt

      if (order === 'asc') return valueA > valueB ? 1 : -1
      return valueA < valueB ? 1 : -1
    })
  }

  function filterProducts(items: ProductType[], filters: Filters) {
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
