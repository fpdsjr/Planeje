import { AppError } from '../../../../shared/errors/AppError'
import { Task } from '../../infra/entities/Task'
import { TasksRepositoryInMemory } from '../../infra/repositories/in-memory/TasksRepositoryInMemory'
import { DeleteTaskUseCase } from './DeleteTaskUseCase'

let deleteTaskUseCase: DeleteTaskUseCase
let tasksRepositoryInMemory: TasksRepositoryInMemory

describe('Delete Task', () => {
  beforeEach(() => {
    tasksRepositoryInMemory = new TasksRepositoryInMemory()
    deleteTaskUseCase = new DeleteTaskUseCase(tasksRepositoryInMemory)
  })

  it('should be able to delete a task', async () => {
    const newTask = {
      description: 'Add to notion'
    }

    await tasksRepositoryInMemory.createTask(newTask)

    const createdTask = tasksRepositoryInMemory.tasks.find(
      (task) => task.description === newTask.description) as Task

    await expect(deleteTaskUseCase.execute(createdTask.id)).resolves.not.toThrowError()
  })

  it('should not be able to delete a not existed task', async () => {
    const newTask = {
      description: 'Add to notion'
    }

    await tasksRepositoryInMemory.createTask(newTask)

    await expect(deleteTaskUseCase.execute('non-existent id')).rejects.toEqual(new AppError('Task do not exists!', 404))
  })
})
