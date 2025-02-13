import { StatusCodes } from "http-status-codes";


const createNew = async (req,res,next)=>{
    try {
        console.log(req.body)
        // await correctCondition.validateAsync(req.body,{abortEarly:false})
        // next()
        res.status(StatusCodes.CREATED).json({message:'post controller thanh cong'})
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: error.message
        })
    }
}

export const boardController = {
    createNew
}
