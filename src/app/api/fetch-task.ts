import { Objective } from '../_types/Objective'
import { api } from '../lib/axios'

export interface FetchTaskObjectiveResponse {
    tasks: Objective[]
}

export async function fetchTask() {
    const token = sessionStorage.getItem('access_token')

    const response = await api.get<FetchTaskObjectiveResponse>('/objectives/tasks', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data.tasks
}