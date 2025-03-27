import { api } from '../lib/axios'

export interface RemoveCollaboratorParams {
    objectiveId: string
    collaboratorId: string
}

export async function removeCollaborator({ collaboratorId, objectiveId }: RemoveCollaboratorParams) {
    const token = sessionStorage.getItem('access_token')
            
    await api.put(`/objective/${objectiveId}/remove/${collaboratorId}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}