import { Invite } from '../_types/Invite'
import { api } from '../lib/axios'

export interface FetchInvitesResponse {
    invites: Invite[]
}

export async function fetchInvites() {
    const token = sessionStorage.getItem('access_token')

    const response = await api.get<FetchInvitesResponse>('/objectives/invites', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }) 
    
    return response.data.invites
}