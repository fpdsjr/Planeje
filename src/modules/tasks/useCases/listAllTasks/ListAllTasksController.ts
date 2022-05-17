import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListAllTasksUseCase } from './ListAllTasksUseCase'

class ListAllTasksController {
  async handle (request: Request, response: Response): Promise<Response> {
    const listAllTasksUseCase = container.resolve(ListAllTasksUseCase)

    const listAllTasks = await listAllTasksUseCase.execute()

    return response.status(200).json(listAllTasks)
  }
}

export { ListAllTasksController }
