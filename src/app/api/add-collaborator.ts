import { api } from '../lib/axios'

export interface AddCollaboratorParams {
    objectiveId: string
    collaboratorId: string
}

export async function addCollaborator({ objectiveId, collaboratorId }: AddCollaboratorParams) {
   const token = sessionStorage.getItem('access_token')
           
    await api.post(`/objective/${objectiveId}/invite/${collaboratorId}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    ) 
}