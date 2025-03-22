import { Objective } from '../_types/Objective'
import { api } from '../lib/axios'

export interface FetchObjectivesResponse {
    objectives: Objective[]
}

export async function FetchObjectives() {
    const token = sessionStorage.getItem('access_token')
        
    const response = await api.get<FetchObjectivesResponse>('/objectives', {
        headers: {
            Authorization: `Bearer ${token}`
        }
     }) 
    
    return response.data.objectives
}