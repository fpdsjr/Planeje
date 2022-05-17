import { TasksStatus } from '@prisma/client'

interface IUpdateTaskStatusDTO {
  id: string
  status: TasksStatus
}

export { IUpdateTaskStatusDTO }
