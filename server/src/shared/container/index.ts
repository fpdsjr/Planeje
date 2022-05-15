import { container } from 'tsyringe'
import { TasksRepository } from '../../modules/tasks/infra/repositories/TasksRepository'
import { ICreateTasksRepository } from '../../modules/tasks/repositories/ICreateTasksRepository'

container.registerSingleton<ICreateTasksRepository>('TasksRepository', TasksRepository)
