import express from 'express'
import { StatusCodes } from 'http-status-codes'

const Router = express.Router()

Router.route('/')
.get((req,res)=>{
    res.status(StatusCodes.OK).json({message:'get thanh cong'})
})
.post((req,res)=>{
    res.status(StatusCodes.CREATED).json({message:'post thanh cong'})
})

export const boardRoute = Router