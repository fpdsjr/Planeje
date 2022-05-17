import { ICreateTaskDTO } from '../../dtos/ICreateTaskDTO'
import { ITasksRepository } from '../ITasksRepository'
import { Task } from '../entities/Task'
import { IUpdateTaskDTO } from '../IUpdateTaskDTO'
import { IUpdateTaskStatusDTO } from '../../dtos/IUpdateTaskStatusDTO'
class TasksRepositoryInMemory implements ITasksRepository {
  tasks: Task[] = []

  async createTask ({ description }: ICreateTaskDTO): Promise<Task> {
    const task = new Task()

    Object.assign(task, {
      description
    })

    this.tasks.push(task)

    return task
  }

  async findTaskById (id: string): Promise<Task | null> {
    const findTaskById = this.tasks.find((task) => task.id === id)

    return findTaskById as Task | null
  }

  async deleteTask (id: string): Promise<void> {
    const deleteTaskById = this.tasks.filter((task) => task.id !== id)

    deleteTaskById.map((task) => this.tasks.push(task))
  }

  async updateTask ({ id, description }: IUpdateTaskDTO): Promise<Task> {
    const updatedTask = await this.findTaskById(id) as Task

    Object.assign(updatedTask, {
      description
    })

    this.tasks.push(updatedTask)

    return updatedTask
  }

  async updateTaskStatus ({ id, status }: IUpdateTaskStatusDTO): Promise<Task> {
    const updatedTaskStatus = await this.findTaskById(id) as Task

    Object.assign(updatedTaskStatus, {
      status
    })

    this.tasks.push(updatedTaskStatus)

    return updatedTaskStatus
  }
}

export { TasksRepositoryInMemory }
