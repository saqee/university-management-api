import { IUser } from './users.interface'
import User from './users.model'
import config from '../../../config'
import { generateUserId } from './users.utils'
import ApiError from '../../../errors/ApiError'
const createUser = async (user: IUser): Promise<IUser | null> => {
  console.log(user)

  const id = await generateUserId()
  user.id = id

  if (!user.password) {
    user.password = config.default_stu_pass as string
  }
  const createdUser = await User.create(user)
  if (!createUser) {
    throw new ApiError(400, 'faile to create user')
  }

  return createdUser
}

export const UserService = {
  createUser,
}
