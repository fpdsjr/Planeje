import { TasksRepositoryInMemory } from '../../repositories/in-memory/TasksRepositoryInMemory'
import { CreateTaskUseCase } from './CreateTaskUseCase'

let createTaskUseCase: CreateTaskUseCase
let tasksRepositoryInMemory: TasksRepositoryInMemory

describe('Create Tasks', () => {
  beforeEach(() => {
    tasksRepositoryInMemory = new TasksRepositoryInMemory()
    createTaskUseCase = new CreateTaskUseCase(tasksRepositoryInMemory)
  })

  it('should be able to create a new task', async () => {
    const taskDescription = {
      description: 'Add to tasks to notion'
    }

    await createTaskUseCase.execute({ description: taskDescription.description })

    const createdTask = tasksRepositoryInMemory.tasks.find(
      (task) => task.description === taskDescription.description)

    expect(createdTask).toHaveProperty('id')
  })
})
