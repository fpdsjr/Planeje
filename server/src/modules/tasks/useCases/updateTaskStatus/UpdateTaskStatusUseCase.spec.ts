import { TasksStatus } from '@prisma/client'
import { AppError } from '../../../../shared/errors/AppError'
import { TasksRepositoryInMemory } from '../../infra/repositories/in-memory/TasksRepositoryInMemory'
import { UpdateTaskStatusUseCase } from './UpdateTaskStatusUseCase'

let tasksRepositoryInMemory: TasksRepositoryInMemory
let updatedTaskStatusUseCase: UpdateTaskStatusUseCase

describe('Update Task Status', () => {
  beforeEach(() => {
    tasksRepositoryInMemory = new TasksRepositoryInMemory()
    updatedTaskStatusUseCase = new UpdateTaskStatusUseCase(tasksRepositoryInMemory)
  })

  it('should be able to update a task status', async () => {
    const createTask = await tasksRepositoryInMemory.createTask({
      description: 'Go to the gym'
    })

    const { id } = createTask
    const status = 'DONE'

    const updatedTaskStatus = await updatedTaskStatusUseCase.execute({ id, status })

    expect(updatedTaskStatus.status).toEqual('DONE')
  })

  it('should not be able to update a non-existent task', async () => {
    await tasksRepositoryInMemory.createTask({
      description: 'Go to the gym'
    })

    const notExistentId = 'non-existent-id'
    const status = 'DONE'

    await expect(updatedTaskStatusUseCase.execute({ id: notExistentId, status })).rejects.toEqual(new AppError('Task do not exists!', 404))
  })

  it('should not be able to update task status with an invalid status', async () => {
    const createTask = await tasksRepositoryInMemory.createTask({
      description: 'Go to the gym'
    })

    const { id } = createTask
    const status = 'DONEEE' as TasksStatus

    await expect(updatedTaskStatusUseCase.execute({ id, status })).rejects.toEqual(new AppError('Invalid Status', 400))
  })
})
