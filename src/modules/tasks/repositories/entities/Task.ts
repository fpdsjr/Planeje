
import { TasksStatus } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

class Task {
  id: string

  description: string

  status: TasksStatus

  constructor () {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { Task }
