import { Router } from 'express'
import { CreateTaskController } from '../modules/tasks/useCases/createTask/CreateTaskController'
import { DeleteTaskController } from '../modules/tasks/useCases/deleteTask/DeleteTaskController'
import { UpdateTaskController } from '../modules/tasks/useCases/updateTask/UpdateTaskController'

const tasksRoutes = Router()

const createTaskController = new CreateTaskController()
const deleteTaskController = new DeleteTaskController()
const updateTaskController = new UpdateTaskController()

tasksRoutes.post('/create', createTaskController.handle)

tasksRoutes.delete('/delete/:id', deleteTaskController.handle)

tasksRoutes.put('/update/:id', updateTaskController.handle)

export { tasksRoutes }
