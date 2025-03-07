import { DashboardColumn } from './DashboardColumn'
import { DashboardPie } from './DashboardPie'

export function DashboardGraphics() {
  return (
    <section className="flex gap-3">
      <DashboardPie />
      <DashboardColumn />
    </section>
  )
}
