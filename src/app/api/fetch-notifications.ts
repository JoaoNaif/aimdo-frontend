import { Notification } from '../_types/Notification'
import { api } from '../lib/axios'

export interface FetchNotificationsResponse {
    notifications: Notification[]
}

export async function fetchNotifications() {
    const token = sessionStorage.getItem('access_token')
    
    const response = await api.get<FetchNotificationsResponse>('/notifications', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }) 

    return response.data.notifications
}