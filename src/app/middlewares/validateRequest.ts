import { Request, Response, NextFunction } from 'express'
const validateRequest =
  schema => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req)
      return next()
    } catch (error) {
      next(error)
    }
  }

export default validateRequest
