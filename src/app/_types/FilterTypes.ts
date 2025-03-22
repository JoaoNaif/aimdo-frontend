export interface Filters {
  status: string
  urgency: string
}

export interface ValueFilterType {
  status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELED'
  urgency?: 'HIGH' | 'MEDIUM' | 'LOW'
  order?: string
}