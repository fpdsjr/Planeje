import { TasksStatus } from '@prisma/client'
import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError'
import { IUpdateTaskStatusDTO } from '../../dtos/IUpdateTaskStatusDTO'
import { Task } from '../../infra/entities/Task'
import { ITasksRepository } from '../../infra/ITasksRepository'

@injectable()
class UpdateTaskStatusUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly tasksRepository: ITasksRepository) { }

  async execute ({ id, status }: IUpdateTaskStatusDTO): Promise<Task> {
    const findTask = await this.tasksRepository.findTaskById(id)

    if (!findTask) {
      throw new AppError('Task do not exists!', 404)
    }

    const values = Object.values(TasksStatus)

    if (!values.includes(status)) {
      throw new AppError('Invalid Status', 400)
    }

    const updatedTaskStatus = await this.tasksRepository.updateTaskStatus({ id, status })

    return updatedTaskStatus
  }
}

export { UpdateTaskStatusUseCase }
