
import { Router } from 'express'
import { CreateTaskController } from '@modules/tasks/useCases/createTask/CreateTaskController'
import { DeleteTaskController } from '@modules/tasks/useCases/deleteTask/DeleteTaskController'
import { ListAllTasksController } from '@modules/tasks/useCases/listAllTasks/ListAllTasksController'
import { UpdateTaskController } from '@modules/tasks/useCases/updateTask/UpdateTaskController'
import { UpdateTaskStatusController } from '@modules/tasks/useCases/updateTaskStatus/UpdateTaskStatusController'

const tasksRoutes = Router()

const createTaskController = new CreateTaskController()
const deleteTaskController = new DeleteTaskController()
const updateTaskController = new UpdateTaskController()
const updateTaskStatusController = new UpdateTaskStatusController()
const listAllTasksController = new ListAllTasksController()

tasksRoutes.get('/list', listAllTasksController.handle)

tasksRoutes.post('/create', createTaskController.handle)

tasksRoutes.put('/update/:id', updateTaskController.handle)

tasksRoutes.patch('/update/status/:id', updateTaskStatusController.handle)

tasksRoutes.delete('/delete/:id', deleteTaskController.handle)

export { tasksRoutes }
