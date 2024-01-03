import express from 'express'
import { AcademicSemesterValidation } from './academicSemester.validation'
import { AcademicSemesterCtr } from './academicSemester.controller'
import validateRequest from '../../middlewares/validateRequest'
const academicRoutes = express.Router()

academicRoutes.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.academicSemesterZodSchema),
  AcademicSemesterCtr.createSemester,
)

academicRoutes.get('/', AcademicSemesterCtr.getAllAcademicSemester)
export default academicRoutes
