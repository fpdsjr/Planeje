
type TasksStatus = 'PENDING' | 'DOING' | 'DONE'

interface IUpdateTaskStatusDTO {
  id: string
  status: TasksStatus
}

export { IUpdateTaskStatusDTO }
