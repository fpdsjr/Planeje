import 'reflect-metadata'
import './shared/container'
import 'express-async-errors'
import express from 'express'
import { router } from './routes'
import { ErrorHandle } from './middleware'
import swaggerUI from 'swagger-ui-express'

import swaggerDocs from './swagger.json'

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.use(router)

app.use(ErrorHandle)

export { app }
