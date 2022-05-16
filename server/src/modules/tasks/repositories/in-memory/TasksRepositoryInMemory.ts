import { Task, TasksStatus } from '@prisma/client'
import { ICreateTaskDTO } from '../../dtos/ICreateTaskDTO'
import { ITasksRepository } from '../ITasksRepository'
import { v4 as uuidv4 } from 'uuid'

class TasksRepositoryInMemory implements ITasksRepository {
  tasks: Task[] = []

  async createTask ({ description }: ICreateTaskDTO): Promise<void> {
    const task = {
      id: uuidv4(),
      description,
      status: TasksStatus.PENDING
    }

    this.tasks.push(task)
  }
}

export { TasksRepositoryInMemory }
