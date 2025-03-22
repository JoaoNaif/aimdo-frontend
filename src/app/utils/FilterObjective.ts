import { SetStateAction } from 'react'
import { Filters, ValueFilterType } from '../_types/FilterTypes'
import { Objective } from '../_types/Objective'

export function sortProducts(items: Objective[], order: string = 'asc') {
    return [...items].sort((a, b) => {
      const valueA = a.createdAt
      const valueB = b.createdAt

      if (order === 'asc') return valueA > valueB ? 1 : -1
      return valueA < valueB ? 1 : -1
    })
  }

  export function filterProducts(items: Objective[], filters: Filters) {
    return items.filter(
      (i) => i.status === filters.status && i.urgency === filters.urgency
    )
  }

  export function getFilters(
    values: ValueFilterType,
    setValueFilter: (value: SetStateAction<ValueFilterType>) => void
  ) {
    setValueFilter((prev) => ({
      order: values.order ?? prev.order,
      status: values.status ?? prev.status,
      urgency: values.urgency ?? prev.urgency,
    }))
  }


  export function resultFilters(taskList: Objective[], valueFilter: ValueFilterType) {
    return sortProducts(
        filterProducts(taskList, {
          status: valueFilter.status ?? '',
          urgency: valueFilter.urgency ?? '',
        }),
        valueFilter.order
      )
  }