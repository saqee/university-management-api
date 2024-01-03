import { Request, Response } from 'express'
import { AcademicSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import pick from '../../../shared/pick'
import { paginationField } from '../../constants/pagination'
import { IAcademicSemester } from './academicSemester.interface'

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.createAcademicSemester(req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'academic semester created successfully',
    data: result,
  })
})

const getAllAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    /*  const paginationOption = {
      page: Number(req.query.page),
      limit: Number(req.query.limit),
      sortBy: req.query.sortBy,
      sortOrder: req.query.sortOrder,
    } */
    const paginationOption = pick(req.query, paginationField)

    const result =
      await AcademicSemesterService.getAllSemester(paginationOption)
    sendResponse<IAcademicSemester[]>(res, {
      statusCode: 200,
      success: true,
      message: 'academic semester get successfully',
      data: result.data,
      meta: result.meta,
    })
  },
)

export const AcademicSemesterCtr = {
  createSemester,
  getAllAcademicSemester,
}
