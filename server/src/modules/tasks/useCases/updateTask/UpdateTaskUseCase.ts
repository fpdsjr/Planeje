import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError'
import { IUpdateTaskDTO } from '../../dtos/IUpdateTaskDTO'
import { Task } from '../../repositories/entities/Task'
import { ITasksRepository } from '../../repositories/ITasksRepository'

@injectable()
class UpdateTaskUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly taskRepository: ITasksRepository) {}

  async execute ({ id, description }: IUpdateTaskDTO): Promise<Task> {
    const findTask = await this.taskRepository.findTaskById(id)

    if (!findTask) {
      throw new AppError('Task do not exists!', 404)
    }

    const updateTask = await this.taskRepository.updateTask({ id, description })

    return updateTask
  }
}

export { UpdateTaskUseCase }
