import { Request, Response } from 'express'
import { UserService } from './users.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createUser(req.body)
  sendResponse(res, {
    statusCode: 200,
    data: result,
    success: true,
    message: 'successfully create user',
  })
})

export const UserCtr = {
  createUser,
}
