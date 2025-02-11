import express from 'express'
import {CONNECT_DB,CLOSE_DB, GET_DB} from './config/mongodb'
import exitHook from 'async-exit-hook'
//import để sử dụng biến môi trường
import 'dotenv/config'
import {env} from '~/config/environment'

const START_SERVER = ()=>{
  const app = express()

  app.get('/', async (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello ${env.AUTHOR}, I am running at ${ env.APP_HOST }:${ env.APP_PORT }/`)
  })

  exitHook(()=>{
    CLOSE_DB()
  })

}

(async ()=>{
  try {
    console.log('dang ket noi toi server');
  await CONNECT_DB()
    console.log('ket noi thanh cong')
    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()
