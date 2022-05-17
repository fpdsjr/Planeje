import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateTaskStatusUseCase } from './UpdateTaskStatusUseCase'

class UpdateTaskStatusController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { status } = request.body

    const updateTaskStatusUseCase = container.resolve(UpdateTaskStatusUseCase)

    const updatedTaskStatus = await updateTaskStatusUseCase.execute({ id, status })

    return response.status(202).json(updatedTaskStatus)
  }
}

export { UpdateTaskStatusController }
