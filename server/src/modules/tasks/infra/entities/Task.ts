
import { v4 as uuidv4 } from 'uuid'

type TasksStatus = 'PENDING' | 'DOING' | 'DONE'

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
