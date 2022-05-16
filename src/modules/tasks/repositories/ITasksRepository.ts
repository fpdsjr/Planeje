import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO'

interface ITasksRepository {
  createTask: ({ description }: ICreateTaskDTO) => Promise<void>
  deleteTask: (id: string) => Promise<void>
}

export { ITasksRepository }
