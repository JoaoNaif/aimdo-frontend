import { api } from '../lib/axios'

export interface AcceptInviteParams {
    inviteId: string
}

export async function acceptInvite({ inviteId }: AcceptInviteParams) {
    const token = sessionStorage.getItem('access_token')
            
    await api.put(`/objective/add-collaborator/${inviteId}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}