import Joi from 'joi'
import {StatusCodes} from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (req,res,next)=>{
    const correctCondition = Joi.object({
        title: Joi.string().required().min(3).max(50).trim().strict().messages({
            'any.required':" is a required field",
            'string.empty':" cannot be an empty field",
            'string.min':" should have a minimum length of ",
            'string.max':" Title lenght must be less then or equal to 5 characters long ",
            'string.trim':" should have a minimum length of ",
        }),
        description: Joi.string().required().min(3).max(256).trim().strict(),
    })
    try {
        await correctCondition.validateAsync(req.body,{abortEarly:false})
        // cho phép code chạy tiếp đến boardController và sau next() không được để 1 dòng code nào nữa để không sinh ra lỗi
        next()
    } catch (error) {
       next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY,new Error(error).message))
    }
}

export const boardValidation = {
    createNew,
}