import { inject, injectable } from 'tsyringe'
import { ICreateTaskDTO } from '../../dtos/ICreateTaskDTO'
import { Task } from '../../repositories/entities/Task'
import { ITasksRepository } from '../../repositories/ITasksRepository'

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
