import { api } from '../lib/axios'

export interface GetUserResponse {
    user: {
        id: string
        username: string
        name: string
        email: string
        createdAt: Date
    }
}

export async function getUser() {
    const token = sessionStorage.getItem('access_token')

    const response = await api.get<GetUserResponse>('/user', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data.user
}