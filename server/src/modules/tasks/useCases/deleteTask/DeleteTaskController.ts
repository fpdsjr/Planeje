import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteTaskUseCase } from './DeleteTaskUseCase'

class DeleteTaskController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deleteTaskUseCase = container.resolve(DeleteTaskUseCase)

    await deleteTaskUseCase.execute(id)

    return response.status(200).json({ message: 'Task Deleted' })
  }
}

export { DeleteTaskController }
