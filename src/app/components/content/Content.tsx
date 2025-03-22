import { OptionContext } from '@/app/context/OptionContext'
import { useContext } from 'react'
import { Dashboard } from './components/Dashboard'
import { Task } from './components/Task'
import { Buy } from './components/Buy'
import { Goal } from './components/Goal'
import { AllObjectives } from './components/AllObjectives'

export function Content() {
  const { option } = useContext(OptionContext)

  return (
    <main>
      {option === 0 && <Dashboard />}
      {option === 1 && <Task />}
      {option === 2 && <Buy />}
      {option === 3 && <Goal />}
      {option === 4 && <AllObjectives />}
    </main>
  )
}
