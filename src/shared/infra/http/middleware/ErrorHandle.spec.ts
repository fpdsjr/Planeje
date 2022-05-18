/* eslint-disable @typescript-eslint/no-floating-promises */
import { NextFunction, Request, Response } from 'express'
import { AppError } from '../../../errors/AppError'
import { ErrorHandle } from './index'

describe('Error Handle middleware', () => {
  const response = {} as Response
  const request = {} as Request
  const next = {} as NextFunction
  const err = new Error('Server Failed')

  beforeEach(() => {
    response.status = jest.fn().mockReturnValue(response)
    response.json = jest.fn()
  })

  it('should return a 500 error', () => {
    ErrorHandle(err, request, response, next)

    expect(response.status).toBeCalledWith(500)
    expect(response.json).toBeCalledWith({
      status: 'error',
      message: 'internal server error - Server Failed'
    })
  })
})

describe('Error Handle middleware', () => {
  const response = {} as Response
  const request = {} as Request
  const next = {} as NextFunction
  const err = new AppError('Not found', 404)

  beforeEach(() => {
    response.status = jest.fn().mockReturnValue(response)
    response.json = jest.fn()
  })

  it('should return an error', () => {
    ErrorHandle(err, request, response, next)

    expect(response.status).toBeCalledWith(404)
    expect(response.json).toBeCalledWith({
      message: 'Not found'
    })
  })
})
