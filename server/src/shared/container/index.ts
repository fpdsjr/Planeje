import { ITasksRepository } from '@modules/tasks/infra/ITasksRepository'
import { TasksRepository } from '@modules/tasks/infra/repositories/implementations/TasksRepository'
import { container } from 'tsyringe'

container.registerSingleton<ITasksRepository>('TasksRepository', TasksRepository)
