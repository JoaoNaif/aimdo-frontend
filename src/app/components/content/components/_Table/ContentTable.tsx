import { ProductType } from '@/app/mock/ProductMock'
import { Trash } from 'lucide-react'
import { useState } from 'react'
import { ModalTable } from './ModalTable'
import ReactDOM from 'react-dom'

interface ContentTableProps {
  item: ProductType
}

export function ContentTable({ item }: ContentTableProps) {
  const [modal, setModal] = useState(false)

  function handleCloseModal() {
    setModal(false)
  }

  return (
    <>
      <tr className="border-y-2 border-slate-100 text-center text-sm font-bold text-slate-400">
        <td className="px-4 py-2 text-left text-slate-800 dark:text-white">
          {item.title}
        </td>
        <td className="p-1">{item.category}</td>
        <td className="p-1">{item.urgency}</td>
        <td className="p-1">{item.status}</td>
        <td className="p-1">
          {item.createdAt.getDate() < 10
            ? `0${item.createdAt.getDate()}`
            : item.createdAt.getDate()}
          /
          {item.createdAt.getMonth() < 10
            ? `0${item.createdAt.getMonth()}`
            : item.createdAt.getMonth()}
          /{item.createdAt.getFullYear()}
        </td>
        <td onClick={() => setModal(true)} className="p-1">
          <button className="hover:text-orange-500 hover:underline">
            Ver mais
          </button>
        </td>
        <td className="flex justify-center p-1">
          <div className="flex w-1/3 cursor-pointer justify-center pt-1 hover:text-rose-500">
            <Trash className="h-5 w-5" />
          </div>
        </td>
      </tr>

      {modal &&
        ReactDOM.createPortal(
          <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-80">
            <ModalTable item={item} handleCloseModal={handleCloseModal} />
          </div>,
          document.body
        )}
    </>
  )
}
