import { TasksRepositoryInMemory } from '../../infra/repositories/in-memory/TasksRepositoryInMemory'
import { ListAllTasksUseCase } from './ListAllTasksUseCase'

let tasksRepositoryInMemory: TasksRepositoryInMemory
let listAllTasksUseCase: ListAllTasksUseCase

describe('List All Tasks ', () => {
  beforeEach(() => {
    tasksRepositoryInMemory = new TasksRepositoryInMemory()
    listAllTasksUseCase = new ListAllTasksUseCase(tasksRepositoryInMemory)
  })

  afterAll(() => {
    tasksRepositoryInMemory.tasks.length = 0
  })

  it('should be able to list all tasks', async () => {
    await tasksRepositoryInMemory.createTask({
      description: 'Go to the gym'
    })

    await tasksRepositoryInMemory.createTask({
      description: 'Go to the store'
    })

    await tasksRepositoryInMemory.createTask({
      description: 'Go to the market'
    })

    const listAllTasks = await listAllTasksUseCase.execute()

    expect(listAllTasks.length).toBe(3)
  })
})
