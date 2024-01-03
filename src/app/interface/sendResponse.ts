import { IGenericErrorMessage } from './errorMessage'

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessage[]
}

export type IApiResponse<T> = {
  success: boolean
  message?: string | null
  statusCode: number
  data?: T | null
  meta?: {
    page?: number
    limit?: number
    total?: number
  }
}
