import request from 'supertest'
import { app } from '../../../../app'

describe('List All Tasks Controller', () => {
  it('should be able to list all tasks', async () => {
    await request(app).post('/tasks/create').send({
      description: 'Go to the gym'
    })

    await request(app).post('/tasks/create').send({
      description: 'Go to the market'
    })

    const listAllTasks = await request(app).get('/tasks/list')

    expect(listAllTasks.status).toBe(200)
    expect(Array.isArray(listAllTasks.body)).toBe(true)
  })
})
