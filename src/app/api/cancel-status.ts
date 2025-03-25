import { api } from '../lib/axios'

export interface CancelStatusParams {
    objectiveId: string
}

export async function cancelStatus({objectiveId}:  CancelStatusParams) {
    const token = sessionStorage.getItem('access_token')
        
    await api.put(`/objective/canceled-status/${objectiveId}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}