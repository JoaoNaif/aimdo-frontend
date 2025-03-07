import { ProductType } from '@/app/mock/ProductMock'
import { useState, useEffect } from 'react'
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  TooltipProps,
  BarChart,
} from 'recharts'
import { NameType } from 'recharts/types/component/DefaultTooltipContent'
import { ValueType } from 'tailwindcss/types/config'

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white bg-opacity-80 p-2">
        <span className="flex items-center gap-1">
          <h3 className="font-bold">Título:</h3>
          <p className="text-sm">{payload[0].payload.title}</p>
        </span>
        <p>
          Você precisou de` <strong>{payload[0].value}h </strong>
          para concluir
        </p>
      </div>
    )
  }

  return null
}

interface DashboradColumnDataProps {
  items: ProductType[]
  transformTimeInHours: (createdAt: Date, completedDate: Date) => number
}

export function DashboardColumnData({
  items,
  transformTimeInHours,
}: DashboradColumnDataProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  const completionTimeInHours = items.map((i) => ({
    title: i.title,
    subtitle: i.title.substring(0, 8).concat('...'),
    time: transformTimeInHours(i.createdAt, i.completedDate as Date),
  }))

  const averageTime =
    completionTimeInHours.reduce((acc, item) => acc + item.time, 0) /
      completionTimeInHours.length || 0

  return (
    <div className="flex">
      <BarChart
        width={500}
        height={300}
        data={completionTimeInHours}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="subtitle" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          name="Tempo para conclusão (horas)"
          dataKey="time"
          barSize={20}
          fill="#FFA500"
        />
      </BarChart>
      <div className="flex flex-col">
        <span className="text-sm text-slate-400">Sua média está em:</span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {averageTime}h
        </h3>
      </div>
    </div>
  )
}
