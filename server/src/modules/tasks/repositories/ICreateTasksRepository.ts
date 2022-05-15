import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO'

interface ICreateTasksRepository {
  createTask: (data: ICreateTaskDTO) => void
}

export { ICreateTasksRepository }
