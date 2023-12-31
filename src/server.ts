import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
export const database = async () => {
  try {
    mongoose.connect(config.db as string)
    console.log('db also connected')

    app.listen(config.port, () => {
      console.log('server is connect')
    })
  } catch (error) {
    console.log('database error')
  }
}

database()
