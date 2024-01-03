import { Response } from 'express'
import { IApiResponse } from '../app/interface/sendResponse'

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const responseData: IApiResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    data: data.data || null,
    meta: data.meta || null,
  }
  res.status(data.statusCode).json(responseData)
}

export default sendResponse
