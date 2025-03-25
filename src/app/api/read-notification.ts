import { api } from '../lib/axios'

export interface ReadNotificationParams {
    notificationId: string
}

export async function readNotification({ notificationId }: ReadNotificationParams) {
    const token = sessionStorage.getItem('access_token')
        
    await api.patch(`/notification/${notificationId}/read`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    ) 
}