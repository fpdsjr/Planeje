import { inject, injectable } from 'tsyringe'
import { Task } from '../../infra/entities/Task'
import { ITasksRepository } from '../../infra/ITasksRepository'

@injectable()
class ListAllTasksUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly tasksRepository: ITasksRepository) {}

  async execute (): Promise<Task[]> {
    const listAllTasks = await this.tasksRepository.listAllTasks()

    return listAllTasks
  }
}

export { ListAllTasksUseCase }
