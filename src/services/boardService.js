// Bắt buộc những hàm trong Service phải có return để trả về kết quả

import { slugify } from "~/utils/formatters"
import {boardModel} from '~/models/boardModel'

const createNew = async (reqBody)=>{
    try {
        // xử lý logic dữ liệu tùy đặc thù dự án
        const newBoard ={
            ...reqBody,
            slug: slugify(reqBody.title)
        }

        const createdBoard = await boardModel.createNew(newBoard)
        const getNewBoard= await boardModel.findOneById(createdBoard.insertedId)


        return getNewBoard
    } catch (error) {
        throw error        
    }

}

export const boardService = {
    createNew
}