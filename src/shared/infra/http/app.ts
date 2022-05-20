import 'reflect-metadata'
import '../../container'
import 'express-async-errors'
import express from 'express'
import { router } from './routes'
import { ErrorHandle } from './middleware'
import swaggerUI from 'swagger-ui-express'
import cors from 'cors'

import swaggerDocs from '../../../swagger.json'

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: '*'
  })
)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.use(router)

app.use(ErrorHandle)

export { app }
