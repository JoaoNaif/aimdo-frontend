import { api } from '../lib/axios'

export interface CreateObjectiveBody {
    title: string
    description: string
    urgency: 'HIGH' | 'MEDIUM' | 'LOW'
    category: 'TASK' | 'BUY' | 'GOAL'
    dueDate: Date | null
}

export async function createObjective({
    category,
    description,
    dueDate,
    title,
    urgency
}: CreateObjectiveBody) {
    const token = sessionStorage.getItem('access_token')
    
    await api.post('/objective', { title, description, urgency, category, dueDate},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}