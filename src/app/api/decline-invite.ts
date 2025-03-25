import { api } from '../lib/axios'

export interface DeclineInviteParams {
    inviteId: string
    collaboratorId: string
}

export async function declineInvite({ inviteId, collaboratorId}: DeclineInviteParams) {
    const token = sessionStorage.getItem('access_token')
            
    await api.put(`/objective/${inviteId}/to/${collaboratorId}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}