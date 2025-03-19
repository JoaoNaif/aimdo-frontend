import { Objective } from '../_types/Objective'
import { api } from '../lib/axios'

export interface FetchTaskObjectiveResponse {
    task: Objective[]
}

export async function fetchTaskObjective() {
    const token = sessionStorage.getItem('access_token')

    const response = await api.get<FetchTaskObjectiveResponse>('/objectives/tasks', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data.task
}