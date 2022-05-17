import { AppError } from '../../../../shared/errors/AppError'
import { TasksRepositoryInMemory } from '../../repositories/in-memory/TasksRepositoryInMemory'
import { UpdateTaskUseCase } from './UpdateTaskUseCase'

let updateTaskUseCase: UpdateTaskUseCase
let tasksRepositoryInMemory: TasksRepositoryInMemory

describe('Update Task ', () => {
  beforeEach(() => {
    tasksRepositoryInMemory = new TasksRepositoryInMemory()
    updateTaskUseCase = new UpdateTaskUseCase(tasksRepositoryInMemory)
  })

  it('should be able to update a task description', async () => {
    const updateTask = {
      description: 'Update to do'
    }

    const createTask = await tasksRepositoryInMemory.createTask({
      description: 'Create to do'
    })

    const { description } = updateTask
    const { id } = createTask

    const updatedTask = await updateTaskUseCase.execute({ id, description })

    expect(updatedTask.description).toEqual('Update to do')
  })

  it('should not be able to not update a non-existent task', async () => {
    const updateTask = {
      description: 'Update to do'
    }

    await tasksRepositoryInMemory.createTask({
      description: 'Create to do'
    })

    const { description } = updateTask
    const nonExistentId = 'non-existent-id'

    await expect(updateTaskUseCase.execute({ id: nonExistentId, description })).rejects.toEqual(new AppError('Task do not exists!', 404))
  })
})
