import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './users.interface'

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true },
)

const User = model<IUser, UserModel>('User', userSchema)

export default User
