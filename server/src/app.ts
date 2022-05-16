import 'reflect-metadata'
import './shared/container'
import 'express-async-errors'
import express, { Request, Response, NextFunction } from 'express'
import { router } from './routes'
import { AppError } from './shared/errors/AppError'
import swaggerUI from 'swagger-ui-express'

import swaggerDocs from './swagger.json'

const app = express()

app.use(express.json())

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.use(router)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      })
    }
    return response.status(500).json({
      status: 'error',
      message: `internal server error - ${err.message}`
    })
  }
)

export { app }
