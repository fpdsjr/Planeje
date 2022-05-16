import { container } from 'tsyringe'
import { TasksRepository } from '../../modules/tasks/repositories/implementations/TasksRepository'
import { ITasksRepository } from '../../modules/tasks/repositories/ITasksRepository'

container.registerSingleton<ITasksRepository>('TasksRepository', TasksRepository)
