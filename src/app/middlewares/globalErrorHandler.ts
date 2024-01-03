import { ErrorRequestHandler } from 'express'
import { IGenericErrorMessage } from '../../app/interface/errorMessage'
import handleValidationError from '../../errors/handleValidationError'
import ApiError from '../../errors/ApiError'
import { handleZodError } from '../../errors/handleZodError'
import { ZodError } from 'zod'
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500
  let message = 'something went wrong'
  let errorMessages: IGenericErrorMessage[] = []

  if (err?.name === 'ValidationError') {
    const errorSimplify = handleValidationError(err)
    statusCode = errorSimplify.statusCode
    message = errorSimplify.message
    errorMessages = errorSimplify.errorMessages
  } else if (err instanceof ApiError) {
    statusCode = err?.statusCode
    message = err?.message
    errorMessages = [
      {
        path: '',
        message: err?.message,
      },
    ]
  } else if (err instanceof ZodError) {
    const zodError = handleZodError(err)
    statusCode = zodError?.statusCode
    message = zodError?.message
    errorMessages = zodError.errorMessages
  } else if (err instanceof Error) {
    message = err?.message
    errorMessages = [
      {
        path: '',
        message: err?.message,
      },
    ]
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: err?.stack ? err?.stack : '',
  })
  next()
}

export default globalErrorHandler
