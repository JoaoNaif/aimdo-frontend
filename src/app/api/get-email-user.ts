import { api } from '../lib/axios'

export interface GetEmailUserResponse {
    user: {
        id: string
        username: string
        name: string
        email: string
        createdAt: Date
    }
}

export interface GetEmailUserParams {
    email: string
}

export async function getEmailUser({ email }: GetEmailUserParams) {
    const token = sessionStorage.getItem('access_token')
    
    const response = await api.get<GetEmailUserResponse>(`/user/${email}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    
    return response.data.user
}