import { Schema, model } from 'mongoose'
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface'
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.constant'
import ApiError from '../../../errors/ApiError'
const academicSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      enum: academicSemesterTitle,
    },
    year: {
      type: Number,
    },
    code: {
      type: String,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      enum: academicSemesterMonth,
    },
    endMonth: {
      type: String,
      enum: academicSemesterMonth,
    },
  },
  { timestamps: true },
)

academicSchema.pre('save', async function (next) {
  const isExits = await AcademicModel.findOne({
    title: this.title,
    year: this.year,
  })
  if (isExits) {
    throw new ApiError(
      400,
      'Already' +
        isExits.title +
        'is exits in the year.so change the year or another term',
    )
  }
  next()
})

const AcademicModel = model<IAcademicSemester, AcademicSemesterModel>(
  'Academic',
  academicSchema,
)

export default AcademicModel
