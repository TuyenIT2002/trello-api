import Joi from 'joi'
import {StatusCodes} from 'http-status-codes'

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
        console.log(req.body)
        await correctCondition.validateAsync(req.body,{abortEarly:false})
        next()
        res.status(StatusCodes.CREATED).json({message:'post validation thanh cong'})
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            errors:new Error(error).message
        })
    }
}

export const boardValidation = {
    createNew,
}