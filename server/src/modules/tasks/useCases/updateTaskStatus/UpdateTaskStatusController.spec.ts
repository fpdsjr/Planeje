
import request from 'supertest'
import { app } from '../../../../shared/http/app'
import { prisma } from '../../../../database/prisma'
import { Task } from '../../repositories/entities/Task'

describe('Update Task Status Controller', () => {
  afterAll(async () => {
    await prisma.task.deleteMany()
  })

  it('should be able to update a task status', async () => {
    const createTask = await request(app).post('/tasks/create').send({
      description: 'Go to the shop'
    })

    const { id } = createTask.body as Task

    const updateTaskStatus = await request(app).patch(`/tasks/update/status/${id}`).send({
      status: 'DONE'
    })

    expect(updateTaskStatus.status).toBe(202)
    expect(updateTaskStatus.body.status).toEqual('DONE')
  })
})
