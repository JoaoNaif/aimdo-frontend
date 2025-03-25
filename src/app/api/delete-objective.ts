import { api } from '../lib/axios'

export interface DeleteObjectiveParams {
    objectiveId: string
}

export async function deleteObjective({ objectiveId }: DeleteObjectiveParams) {
    const token = sessionStorage.getItem('access_token')
        
    await api.delete(`/objective/${objectiveId}`, {
        headers: {
                Authorization: `Bearer ${token}`
        }
    }
    )  
}