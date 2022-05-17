import request from 'supertest'
import { app } from '../../../../app'
import { prisma } from '../../../../database/prisma'
import { Task } from '../../repositories/entities/Task'

describe('Update Task Controller ', () => {
  afterAll(async () => {
    await prisma.task.deleteMany()
  })

  it('should be able to update a task ', async () => {
    const createTask = await request(app).post('/tasks/create').send({
      description: 'And I feel blessed'
    })

    const { id } = createTask.body as Task

    const updateTask = await request(app).put(`/tasks/update/${id}`).send({
      description: 'Updated task'
    })

    expect(updateTask.status).toBe(200)
    expect(updateTask.body.description).toEqual('Updated task')
  })
})
