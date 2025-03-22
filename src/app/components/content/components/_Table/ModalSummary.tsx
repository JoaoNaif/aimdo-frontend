import { Objective } from '@/app/_types/Objective'

interface ModalSummaryProps {
  item: Objective
}

export function ModalSummary({ item }: ModalSummaryProps) {
  const createdAtObjective = new Date(item.createdAt)

  return (
    <ul className="grid grid-cols-2 gap-2">
      <li className="flex flex-col">
        <h3 className="text-sm">Status:</h3>
        <p className="font-bold">
          {item.status === 'PENDING' && 'Pendente'}{' '}
          {item.status === 'IN_PROGRESS' && 'Em progresso'}
          {item.status === 'COMPLETED' && 'Concluído'}
          {item.status === 'CANCELED' && 'Cancelado'}
        </p>
      </li>
      <li className="flex flex-col">
        <h3 className="text-sm">Criado:</h3>
        <p className="font-bold">
          {createdAtObjective.getDate() < 10
            ? `0${createdAtObjective.getDate()}`
            : createdAtObjective.getDate()}
          /
          {createdAtObjective.getMonth() < 10
            ? `0${createdAtObjective.getMonth()}`
            : createdAtObjective.getMonth()}
          /{createdAtObjective.getFullYear()}
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
