import { api } from '../lib/axios'

export interface AuthenticateUserBody {
    email: string
    password: string
}

export interface AuthenticateUserResponse {
    access_token: string
}

export async function AutehnticateUser({
    email,
    password
}: AuthenticateUserBody) {
    const response = await api.post<AuthenticateUserResponse>('/sessions', { email, password })

    return response.data
}