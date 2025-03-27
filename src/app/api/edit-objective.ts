import { api } from '../lib/axios'

export interface EditObjectiveRequest {
    objectiveId: string
    title: string | null
    description: string | null
    category: 'TASK' | 'BUY' | 'GOAL' | null
}

export async function editObjective({ objectiveId , category, description, title}: EditObjectiveRequest) {
    const token = sessionStorage.getItem('access_token')
    
    await api.put(`/objective/uncanceled-status/${objectiveId}`, { title, description, category}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )  
}