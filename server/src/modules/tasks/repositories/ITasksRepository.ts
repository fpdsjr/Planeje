import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO'

interface ITasksRepository {
  createTask: (data: ICreateTaskDTO) => void
}

export { ITasksRepository }
