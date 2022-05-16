import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateTaskUseCase } from './CreateTaskUseCase'

class CreateTaskController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { description } = request.body

    const createTaskUseCase = container.resolve(CreateTaskUseCase)

    await createTaskUseCase.execute({ description })

    return response.status(201).json('tasks created')
  }
}

export { CreateTaskController }
