import { Task } from '@modules/tasks/infra/entities/Task'
import { ITasksRepository } from '@modules/tasks/infra/ITasksRepository'
import { inject, injectable } from 'tsyringe'

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
