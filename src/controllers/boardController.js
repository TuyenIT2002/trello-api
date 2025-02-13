import { StatusCodes } from "http-status-codes";
import ApiError from '~/utils/ApiError'

const createNew = async (req,res,next)=>{
    try {
        res.status(StatusCodes.CREATED).json({message : 'post controller thanh cong'})
        throw new ApiError(StatusCodes.BAD_GATEWAY, 'tuyendev message error')         
    } catch (error) {
      next(error)
    }   
}

export const boardController = {
    createNew
}
