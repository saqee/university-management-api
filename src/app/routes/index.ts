import express from 'express'
import academicRoutes from '../modules/academicSemester/academicSemester.routes'
import userRoutes from '../modules/users/users.routes'
const router = express.Router()

const moduleRoutes = [
  { path: '/academic', route: academicRoutes },
  { path: '/users', route: userRoutes },
]
moduleRoutes.map(route => router.use(route.path, route.route))

export default router
