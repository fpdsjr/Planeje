import { ICreateTaskDTO } from '../../dtos/ICreateTaskDTO'
import { ITasksRepository } from '../ITasksRepository'
import { Task } from '../entities/Task'
import { IUpdateTaskDTO } from '../../dtos/IUpdateTaskDTO'
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
    const update = await this.findTaskById(id) as Task

    Object.assign(update, {
      description
    })

    this.tasks.push(update)

    return update
  }
}

export { TasksRepositoryInMemory }
