import { api } from '../lib/axios'

export interface ChangeStatusParams {
    objectiveId: string
}

export async function changeStatus({ objectiveId }: ChangeStatusParams) {
    const token = sessionStorage.getItem('access_token')
    
    await api.put(`/objective/change-status/${objectiveId}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}