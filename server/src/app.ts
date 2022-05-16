import 'reflect-metadata'
import './shared/container'
import express from 'express'
import { router } from './routes'
import swaggerUI from 'swagger-ui-express'

import swaggerDocs from './swagger.json'

const app = express()

app.use(express.json())

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.use(router)

export { app }
