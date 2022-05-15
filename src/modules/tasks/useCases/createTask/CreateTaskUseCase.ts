import { inject, injectable } from 'tsyringe'
import { ICreateTaskDTO } from '../../dtos/ICreateTaskDTO'
import { ITasksRepository } from '../../repositories/ITasksRepository'

@injectable()
class CreateTaskUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly tasksRepository: ITasksRepository) {}

  async execute ({ description }: ICreateTaskDTO): Promise<void> {
    await this.tasksRepository.createTask({ description })
  }
}

export { CreateTaskUseCase }
