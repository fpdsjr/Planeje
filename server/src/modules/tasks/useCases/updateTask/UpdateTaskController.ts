import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateTaskUseCase } from './UpdateTaskUseCase'

class UpdateTaskController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { description } = request.body

    const updateTaskUseCase = container.resolve(UpdateTaskUseCase)

    const updatedTask = await updateTaskUseCase.execute({ id, description })

    return response.status(200).json(updatedTask)
  }
}

export { UpdateTaskController }
