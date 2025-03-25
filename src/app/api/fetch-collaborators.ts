import { Collaborator } from '../_types/Collaborators'
import { api } from '../lib/axios'

export interface FetchCollaboratorsResponse {
    collaborators: Collaborator[]
}

export interface FetchCollaboratorsParams {
    objectiveId: string
}

export async function fetchCollaborators({ objectiveId }: FetchCollaboratorsParams) {
    const token = sessionStorage.getItem('access_token')
    
    const response = await api.get<Collaborator[]>(`/objectives/collaborators/${objectiveId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }) 

    return response.data 
}