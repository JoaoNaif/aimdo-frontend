import { ProductType } from '@/app/mock/ProductMock'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

const COLORS = ['#10B981', '#F59E0B', '#6366F1', '#E11D48']

function getStatusCount(produts: ProductType[]): {
  status: string
  quantity: number
}[] {
  return Object.entries(
    produts.reduce<Record<string, number>>((acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1
      return acc
    }, {})
  ).map(([status, quantity]) => ({ status, quantity }))
}

interface DashboardPieDataProps {
  objetives: ProductType[]
}

export function DashboardPieData({ objetives }: DashboardPieDataProps) {
  const statusCount = getStatusCount(objetives)

  return (
    <>
      <ResponsiveContainer width="60%" height={240}>
        <PieChart style={{ fontSize: 12 }}>
          <Pie
            data={statusCount}
            dataKey="quantity"
            nameKey="status"
            cx="50%"
            cy="50%"
            outerRadius={86}
            innerRadius={64}
            fill="#8884d8"
            labelLine={false}
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              percent,
            }) => {
              const RADIAN = Math.PI / 180
              const radius = 12 + innerRadius + (outerRadius - innerRadius)
              const x = cx + radius * Math.cos(-midAngle * RADIAN)
              const y = cy + radius * Math.sin(-midAngle * RADIAN)

              return (
                <text
                  x={x}
                  y={y}
                  className="fill-slate-900 text-xs dark:fill-white"
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                >
                  {`${(percent * 100).toFixed(0)}%`}
                </text>
              )
            }}
          >
            {statusCount.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <ul className="flex flex-col gap-2">
        {statusCount.map((count, index) => (
          <li key={`status-${index}`}>
            <h3 className="text-sm text-slate-400">
              {count.status === 'completed' && 'Concluído'}
              {count.status === 'pending' && 'Pendente'}
              {count.status === 'in-progress' && 'Em progresso'}
              {count.status === 'canceled' && 'Cancelado'}
            </h3>
            <span className="flex items-center gap-2">
              <div
                className={`h-4 w-4 rounded-full ${index === 0 && 'bg-emerald-500'} ${index === 1 && 'bg-amber-500'} ${index === 2 && 'bg-indigo-500'} ${index === 3 && 'bg-rose-500'}`}
              />
              <p className="text-xl font-bold text-slate-900 dark:text-white">
                {count.quantity}
              </p>
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
