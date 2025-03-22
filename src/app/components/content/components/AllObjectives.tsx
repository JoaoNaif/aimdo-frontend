import { FetchObjectives } from '@/app/api/fetch-objectives'
import { DataTable } from './_Table/DataTable'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { SearchContext } from '@/app/context/searchContext'

export function AllObjectives() {
  const { search } = useContext(SearchContext)

  const { data: objectives = [] } = useQuery({
    queryFn: FetchObjectives,
    queryKey: ['objectives'],
  })

  const filter = objectives.filter((i) => i.title.includes(search))

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
        Todos os objetivos
      </h1>
      <DataTable list={filter} />
    </div>
  )
}
