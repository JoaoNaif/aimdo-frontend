export interface Notification {
    id: string
    recipientId: string
    title: string
    content: string
    readAt?: Date | null
    createdAt: Date
}