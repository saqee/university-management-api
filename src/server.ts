import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
export const database = async () => {
  let server
  try {
    mongoose.connect(config.db as string)
    console.log('db also connected')

    server = app.listen(config.port, () => {
      console.log('server is connect')
    })
  } catch (error) {
    console.log('database error')
  }
  process.on('unhandledRejection', err => {
    console.log('server is closing')
    if (server) {
      server.close(() => {
        console.log(err)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

process.on('uncaughtException', () => {
  console.log('uncaught rejection ')
  process.exit(1)
})

database()
