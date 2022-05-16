export class AppError extends Error {
  message: string
  statusCode: number

  constructor (message: string, statusCode = 400) {
    super()
    this.message = message
    this.statusCode = statusCode

    Object.setPrototypeOf(this, AppError.prototype)
  }
}
