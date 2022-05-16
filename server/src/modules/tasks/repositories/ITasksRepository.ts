import { Task } from '@prisma/client'
import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO'

interface ITasksRepository {
  createTask: ({ description }: ICreateTaskDTO) => Promise<void>
  deleteTask: (id: string) => Promise<void>
  findTaskById: (id: string) => Promise<Task | null>
}

export { ITasksRepository }