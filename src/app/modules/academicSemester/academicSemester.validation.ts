import { z } from 'zod'
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.constant'
const academicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitle] as [string, ...string[]], {
      required_error: 'title is required',
    }),
    year: z.number(),
    code: z.enum([...academicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...academicSemesterMonth] as [string, ...string[]]),
    endMonth: z.enum([...academicSemesterMonth] as [string, ...string[]]),
  }),
})

export const AcademicSemesterValidation = {
  academicSemesterZodSchema,
}
