import { api } from '../lib/axios'

export interface RegisterUserBody {
    name: string
    username: string
    email: string
    password: string
}

export async function registerUser({
    email,
    name,
    password,
    username
}: RegisterUserBody) {
    await api.post('/register', { name, username, email, password})
}