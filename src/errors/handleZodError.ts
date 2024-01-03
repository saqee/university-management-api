import { IGenericErrorMessage } from '../app/interface/errorMessage'
import { IGenericErrorResponse } from '../app/interface/sendResponse'

export const handleZodError = (err): IGenericErrorResponse => {
  const statusCode = 400
  const errors: IGenericErrorMessage[] = err.issues.map(issue => {
    return {
      path: issue.path[1],
      message: issue.message,
    }
  })
  return {
    statusCode,
    message: 'zod error',
    errorMessages: errors,
  }
}
