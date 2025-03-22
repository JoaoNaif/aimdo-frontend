import { Objective } from '../_types/Objective'
import { api } from '../lib/axios'

export interface FetchBuysObjectiveResponse {
    buys: Objective[]
}

export async function fetchBuys() {
    const token = sessionStorage.getItem('access_token')
    
        const response = await api.get<FetchBuysObjectiveResponse>('/objectives/buys', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    
        return response.data.buys
}