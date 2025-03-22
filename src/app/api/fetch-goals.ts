import { Objective } from '../_types/Objective'
import { api } from '../lib/axios'

export interface FetchGoalsResponse {
    goals: Objective[]
}

export async function FetchGoals() {
    const token = sessionStorage.getItem('access_token')
    
    const response = await api.get<FetchGoalsResponse>('/objectives/goals', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }) 

    return response.data.goals
}