import { Task } from '../../entities/Task'
import { prisma } from '../../../../../database/prisma'
import { ICreateTaskDTO } from '../../../dtos/ICreateTaskDTO'
import { ITasksRepository } from '../../ITasksRepository'
import { IUpdateTaskDTO } from '../../IUpdateTaskDTO'

import { IUpdateTaskStatusDTO } from '../../../dtos/IUpdateTaskStatusDTO'

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

  async updateTask ({ id, description }: IUpdateTaskDTO): Promise<Task> {
    const updatedTask = await prisma.task.update({
      where: {
        id
      },
      data: {
        description
      }
    })

    return updatedTask
  }

  async updateTaskStatus ({ id, status }: IUpdateTaskStatusDTO): Promise<Task> {
    const updatedTaskStatus = await prisma.task.update({
      where: {
        id
      },
      data: {
        status
      }
    })

    return updatedTaskStatus
  }

  async listAllTasks (): Promise<Task[]> {
    const listAllTasks = await prisma.task.findMany()

    return listAllTasks
  }
}

export { TasksRepository }
