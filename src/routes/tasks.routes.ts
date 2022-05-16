import { Router } from 'express'
import { CreateTaskController } from '../modules/tasks/useCases/createTask/CreateTaskController'
import { DeleteTaskController } from '../modules/tasks/useCases/deleteTask/DeleteTaskController'

const tasksRoutes = Router()

const createTaskController = new CreateTaskController()
const deleteTaskController = new DeleteTaskController()

tasksRoutes.post('/create', createTaskController.handle)

tasksRoutes.post('/delete/:id', deleteTaskController.handle)

export { tasksRoutes }
