import { inject, injectable } from 'tsyringe'
import { IUpdateTaskDTO } from '../../dtos/IUpdateTaskDTO'
import { Task } from '../../repositories/entities/Task'
import { ITasksRepository } from '../../repositories/ITasksRepository'

@injectable()
class UpdateTaskUseCase {
  constructor (
    @inject('UsersRepository')
    private readonly taskRepository: ITasksRepository) {}

  async execute ({ id, description }: IUpdateTaskDTO): Promise<Task> {
    const updateTask = await this.taskRepository.updateTask({ id, description })

    return updateTask
  }
}

export { UpdateTaskUseCase }
