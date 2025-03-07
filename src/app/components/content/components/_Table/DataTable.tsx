import { ProductType } from '@/app/mock/ProductMock'
import { ContentTable } from './ContentTable'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface DataTableProps {
  list: ProductType[]
}

export function DataTable({ list }: DataTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white dark:bg-slate-900">
      <table className="max-h-[450px] w-full">
        <thead>
          <tr className="text-center text-slate-400 dark:text-white">
            <th className="px-4 py-2 text-left">Título</th>
            <th className="p-1">Categoria</th>
            <th className="p-1">Urgência</th>
            <th className="p-1">Status</th>
            <th className="p-1">Criado em</th>
            <th className="p-1">Detalhes</th>
            <th className="p-1">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <ContentTable item={item} key={item.id} />
          ))}
        </tbody>
      </table>
      <footer className="flex h-20 items-center justify-between p-5 text-slate-800 dark:text-white">
        <span className="flex items-center gap-1 text-sm">
          <ChevronLeft className="h-6 w-6" />
          <p>Anterior</p>
        </span>
        <button className="rounded-md bg-orange-500 px-2 py-1 text-sm font-bold text-white">
          01
        </button>
        <span className="flex items-center gap-1 text-sm">
          <p>Próximo</p>
          <ChevronRight className="h-6 w-6" />
        </span>
      </footer>
    </div>
  )
}
