import { inject, injectable } from 'tsyringe'
import { ITasksRepository } from '../../repositories/ITasksRepository'

@injectable()
class DeleteTaskUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly tasksRepository: ITasksRepository) {}

  async execute (id: string): Promise<void> {
    await this.tasksRepository.deleteTask(id)
  }
}

export { DeleteTaskUseCase }
