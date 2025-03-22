export interface Objective {
    id: string
    title: string
    description: string
    category: 'TASK' | 'BUY' | 'GOAL'
    status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELED'
    urgency: 'HIGH' | 'MEDIUM' | 'LOW'
    dueDate?: Date | null
    createdAt: string
}