import { Task } from '../entities/Task'
import { prisma } from '../../../../database/prisma'
import { ICreateTaskDTO } from '../../dtos/ICreateTaskDTO'
import { ITasksRepository } from '../../repositories/ITasksRepository'

class TasksRepository implements ITasksRepository {
  async createTask ({ description }: ICreateTaskDTO): Promise<Task> {
    const task = await prisma.task.create({
      data: {
        description
      }
    })

    return task
  }

  async findTaskById (id: string): Promise<Task | null> {
    const task = await prisma.task.findUnique({
      where: {
        id
      }
    })

    return task
  }

  async deleteTask (id: string): Promise<void> {
    await prisma.task.delete({
      where: {
        id
      }
    })
  }
}

export { TasksRepository }
