export interface Invite {
    id: string,
    objectiveId: string,
    collaboratorId: string,
    objective: {
      title: string,
      description: string,
    },
    status: 'PENDING' | 'ACCEPTED' | 'REJECTED',
    createdAt: string,
    updatedAt: string,
}