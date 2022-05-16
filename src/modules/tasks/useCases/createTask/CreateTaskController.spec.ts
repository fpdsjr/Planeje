import request from 'supertest'
import { app } from '../../../../app'

describe('Create Task Controller', () => {
  it('should be able to create a new task', async () => {
    const response = await request(app).post('/tasks/create').send({
      description: 'Test everything'
    })

    expect(response.status).toBe(201)
  })
})
