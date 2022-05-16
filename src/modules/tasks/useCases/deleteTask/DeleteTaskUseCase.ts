import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError'
import { ITasksRepository } from '../../repositories/ITasksRepository'

@injectable()
class DeleteTaskUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly tasksRepository: ITasksRepository) {}

  async execute (id: string): Promise<void> {
    const deleteId = await this.tasksRepository.findTaskById(id)

    if (!deleteId) {
      throw new AppError('Task do not exists!', 404)
    }

    await this.tasksRepository.deleteTask(id)
  }
}

export { DeleteTaskUseCase }
