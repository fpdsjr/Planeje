import { ITasksRepository } from '@modules/tasks/infra/ITasksRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

@injectable()
class DeleteTaskUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly tasksRepository: ITasksRepository) {}

  async execute (id: string): Promise<void> {
    const findTask = await this.tasksRepository.findTaskById(id)

    if (!findTask) {
      throw new AppError('Task do not exists!', 404)
    }

    await this.tasksRepository.deleteTask(id)
  }
}

export { DeleteTaskUseCase }
