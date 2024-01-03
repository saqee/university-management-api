import ApiError from '../../../errors/ApiError'
import { calculatePagination } from '../../../helpers/paginationHelper'
import {
  IGenericResponse,
  IPagination,
} from '../../interface/mixedCommonInterface'
import { academicSemesterCodeMapper } from './academicSemester.constant'
import { IAcademicSemester } from './academicSemester.interface'
import AcademicModel from './academicSemester.model'

const createAcademicSemester = async (payload: IAcademicSemester) => {
  if (academicSemesterCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(400, 'code is not match with our code')
  }
  const results = await AcademicModel.create(payload)
  return results
}

const getAllSemester = async (
  payload: IPagination,
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { page, limit, skip } = calculatePagination(payload)
  const results = await AcademicModel.find().skip(skip).limit(limit)
  const total = await AcademicModel.countDocuments()
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: results,
  }
}

export const AcademicSemesterService = {
  createAcademicSemester,
  getAllSemester,
}
