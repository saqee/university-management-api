import express from 'express'
import { UserCtr } from './users.controller'
import { UserValidation } from './users.validation'
import validateRequest from '../../middlewares/validateRequest'
const router = express.Router()
router.post(
  '/create-user',
  validateRequest(UserValidation.createUserInputSchema),
  UserCtr.createUser,
)
export default router
