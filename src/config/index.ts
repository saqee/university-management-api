import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  db: process.env.DB_URL,
  secret: process.env.SECRET,
  default_stu_pass: process.env.DEFAULT_STU_PASS,
}
