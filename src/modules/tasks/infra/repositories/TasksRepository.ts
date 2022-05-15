import { prisma } from '../../../../database/prisma'
import { ICreateTaskDTO } from '../../dtos/ICreateTaskDTO'
import { ICreateTasksRepository } from '../../repositories/ICreateTasksRepository'

class TasksRepository implements ICreateTasksRepository {
  async createTask ({ description }: ICreateTaskDTO): Promise<void> {
    await prisma.task.create({
      data: {
        description
      }
    })
  }
}

export { TasksRepository }
