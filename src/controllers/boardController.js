import { StatusCodes } from "http-status-codes";
import {boardService} from '~/services/boardService'

const createNew = async (req,res,next)=>{
    try {
        const createdBoard = await boardService.createNew(req.body)
        // có kết quả thì trả về phía client
        res.status(StatusCodes.CREATED).json(createdBoard)
    } catch (error) {
      next(error)
    }   
}

export const boardController = {
    createNew
}
