import { Task } from '@modules/tasks/infra/entities/Task'
import { ICreateTaskDTO } from '@modules/tasks/dtos/ICreateTaskDTO'
import { IUpdateTaskDTO } from '@modules/tasks/dtos/IUpdateTaskDTO'
import { IUpdateTaskStatusDTO } from '@modules/tasks/dtos/IUpdateTaskStatusDTO'

interface ITasksRepository {
  createTask: ({ description }: ICreateTaskDTO) => Promise<Task>
  deleteTask: (id: string) => Promise<void>
  findTaskById: (id: string) => Promise<Task | null>
  updateTask: ({ id, description }: IUpdateTaskDTO) => Promise<Task>
  updateTaskStatus: ({ id, status }: IUpdateTaskStatusDTO) => Promise<Task>
  listAllTasks: () => Promise<Task[]>
}

export { ITasksRepository }
