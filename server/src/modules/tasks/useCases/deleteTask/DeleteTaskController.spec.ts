
import request from 'supertest'
import { app } from '../../../../shared/infra/http/app'
import { prisma } from '../../../../database/prisma'
import { Task } from '../../infra/entities/Task'

describe('Delete Task Controller', () => {
  afterAll(async () => {
    await prisma.task.deleteMany()
  })

  it('should be able to delete a task', async () => {
    const createdTask = await request(app).post('/tasks/create').send({
      description: 'Be rich'
    })

    const { id } = createdTask.body as Task

    const deleteTask = await request(app).delete(`/tasks/delete/${id}`)

    expect(deleteTask.status).toBe(200)
    expect(deleteTask.body.message).toEqual('Task Deleted')
  })
})
