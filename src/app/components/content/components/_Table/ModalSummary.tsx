import { ProductType } from '@/app/mock/ProductMock'

interface ModalSummaryProps {
  item: ProductType
}

export function ModalSummary({ item }: ModalSummaryProps) {
  return (
    <ul className="grid grid-cols-2 gap-2">
      <li className="flex flex-col">
        <h3 className="text-sm">Status:</h3>
        <p className="font-bold">
          {item.status === 'pending' && 'Pendente'}{' '}
          {item.status === 'in-progress' && 'Em progresso'}
          {item.status === 'completed' && 'Concluído'}
          {item.status === 'canceled' && 'Cancelado'}
        </p>
      </li>
      <li className="flex flex-col">
        <h3 className="text-sm">Criado:</h3>
        <p className="font-bold">
          {item.createdAt.getDate() < 10
            ? `0${item.createdAt.getDate()}`
            : item.createdAt.getDate()}
          /
          {item.createdAt.getMonth() < 10
            ? `0${item.createdAt.getMonth()}`
            : item.createdAt.getMonth()}
          /{item.createdAt.getFullYear()}
        </p>
      </li>
      <li className="flex flex-col">
        <h3 className="text-sm">Categoria:</h3>
        <p className="font-bold">
          {item.category === 'BUY' && 'Compra'}{' '}
          {item.category === 'TASK' && 'Tarefa'}
          {item.category === 'GOAL' && 'Meta'}
        </p>
      </li>
      <li className="flex flex-col">
        <h3 className="text-sm">Urgência</h3>
        <p className="font-bold">
          {item.urgency === 'HIGH' && 'Alta'}{' '}
          {item.urgency === 'MEDIUM' && 'Média'}
          {item.urgency === 'LOW' && 'Baixa'}
        </p>
      </li>
    </ul>
  )
}
