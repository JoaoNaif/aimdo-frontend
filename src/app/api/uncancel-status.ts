import { api } from '../lib/axios'

export interface UncancelStatusParams {
    objectiveId: string
}

export async function uncancelStatus({ objectiveId }: UncancelStatusParams) {
    const token = sessionStorage.getItem('access_token')
    
    await api.put(`/objective/uncanceled-status/${objectiveId}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )    
}