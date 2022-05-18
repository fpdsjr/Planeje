
import { inject, injectable } from 'tsyringe'
import { ICreateTaskDTO } from '@modules/tasks/dtos/ICreateTaskDTO'
import { ITasksRepository } from '@modules/tasks/infra/ITasksRepository'
import { Task } from '../../infra/entities/Task'

@injectable()
class CreateTaskUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly tasksRepository: ITasksRepository) {}

  async execute ({ description }: ICreateTaskDTO): Promise<Task> {
    const task = await this.tasksRepository.createTask({ description })

    return task
  }
}

export { CreateTaskUseCase }
