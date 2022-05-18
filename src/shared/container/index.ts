import { container } from 'tsyringe'
import { TasksRepository } from '../../modules/tasks/infra/repositories/implementations/TasksRepository'
import { ITasksRepository } from '../../modules/tasks/infra/ITasksRepository'

container.registerSingleton<ITasksRepository>('TasksRepository', TasksRepository)
