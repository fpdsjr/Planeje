import { Task } from './entities/Task'
import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO'
import { IUpdateTaskDTO } from './IUpdateTaskDTO'
import { IUpdateTaskStatusDTO } from '../dtos/IUpdateTaskStatusDTO'

interface ITasksRepository {
  createTask: ({ description }: ICreateTaskDTO) => Promise<Task>
  deleteTask: (id: string) => Promise<void>
  findTaskById: (id: string) => Promise<Task | null>
  updateTask: ({ id, description }: IUpdateTaskDTO) => Promise<Task>
  updateTaskStatus: ({ id, status }: IUpdateTaskStatusDTO) => Promise<Task>
}

export { ITasksRepository }
