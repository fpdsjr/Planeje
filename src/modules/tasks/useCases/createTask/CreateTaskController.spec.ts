
import request from 'supertest'
import { app } from '../../../../shared/infra/http/app'
import { prisma } from '../../../../database/prisma'

describe('Create Task Controller', () => {
  afterAll(async () => {
    await prisma.task.deleteMany()
  })

  it('should be able to create a new task', async () => {
    const response = await request(app).post('/tasks/create').send({
      description: 'Test everything'
    })

    expect(response.status).toBe(201)
  })
})
