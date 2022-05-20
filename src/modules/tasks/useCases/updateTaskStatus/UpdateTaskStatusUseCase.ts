import { IUpdateTaskStatusDTO } from '@modules/tasks/dtos/IUpdateTaskStatusDTO'
import { Task } from '@modules/tasks/infra/entities/Task'
import { ITasksRepository } from '@modules/tasks/infra/ITasksRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

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

    const TasksStatus = {
      PENDING: 'PENDING',
      DOING: 'DOING',
      DONE: 'DONE'
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
