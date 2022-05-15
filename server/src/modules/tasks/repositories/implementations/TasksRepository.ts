import { prisma } from '../../../../database/prisma'
import { ICreateTaskDTO } from '../../dtos/ICreateTaskDTO'
import { ITasksRepository } from '../../repositories/ITasksRepository'

class TasksRepository implements ITasksRepository {
  async createTask ({ description }: ICreateTaskDTO): Promise<void> {
    await prisma.task.create({
      data: {
        description
      }
    })
  }
}

export { TasksRepository }
