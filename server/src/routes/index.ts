import { Router } from 'express'
import { tasksRoutes } from './tasks.routes'

const router = Router()

router.use('/tasks', tasksRoutes)

export { router }
