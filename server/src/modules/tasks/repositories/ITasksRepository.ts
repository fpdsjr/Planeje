import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO'

interface ITasksRepository {
  createTask: ({ description }: ICreateTaskDTO) => Promise<void>
}

export { ITasksRepository }
