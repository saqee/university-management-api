import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../app/interface/errorMessage'
import { IGenericErrorResponse } from '../app/interface/sendResponse'
const handleValidationError = (
  err: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(el => {
    return {
      path: el?.path,
      message: el?.message,
    }
  })

  return {
    statusCode: 400,
    message: 'Validation Error',
    errorMessages: errors,
  }
}

export default handleValidationError
