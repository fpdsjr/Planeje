import { Task, TasksStatus } from '@prisma/client'
import { ICreateTaskDTO } from '../../dtos/ICreateTaskDTO'
import { ITasksRepository } from '../ITasksRepository'

class TasksRepositoryInMemory implements ITasksRepository {
  tasks: Task[] = []

  async createTask ({ description }: ICreateTaskDTO): Promise<void> {
    const tasks = {
      id: 'testId',
      description,
      status: TasksStatus.PENDING
    }

    this.tasks.push(tasks)
  }
}

export { TasksRepositoryInMemory }
