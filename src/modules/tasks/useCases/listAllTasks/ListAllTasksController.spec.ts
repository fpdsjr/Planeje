import request from 'supertest'
import { app } from '../../../../shared/infra/http/app'
import { prisma } from '../../../../database/prisma'

describe('List All Tasks Controller', () => {
  afterAll(async () => {
    await prisma.task.deleteMany()
  })

  it('should be able to list all tasks', async () => {
    await request(app).post('/tasks/create').send({
      description: 'Go to the gym'
    })

    await request(app).post('/tasks/create').send({
      description: 'Go to the market'
    })

    const listAllTasks = await request(app).get('/tasks/list')

    expect(listAllTasks.status).toBe(200)
    expect(listAllTasks.body.length).toBe(2)
    expect(Array.isArray(listAllTasks.body)).toBe(true)
  })
})
