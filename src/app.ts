import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import routes from './app/routes'

import globalErrorHandler from './app/middlewares/globalErrorHandler'

//import ApiError from './errors/ApiError'
const app = express()
app.use(express.json())
//app.use(express.urlencoded({ extended: true }))
app.use(cors())
//application routes
app.use('/api/v1/', routes)

/* app.get('/', (req, res) => {
  throw new ApiError(305, 'ore happa marce')
}) */

/* app.get('/', async (req, res) => {
  Promise.reject(new Error('unhandled rejection'))
}) */
app.use(globalErrorHandler)

//handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    messgae: 'not found',
    errorMessages: [
      {
        path: `${req.url}`,
        message: 'api not found',
      },
    ],
  })
  next()
})
export default app
