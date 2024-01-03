import { object, string } from 'zod'

const createUserInputSchema = object({
  body: object({
    role: string({
      required_error: 'role is required',
    }),
  }),
})
//    await createUserInputSchema.parseAsync(req.body)

export const UserValidation = {
  createUserInputSchema,
}
