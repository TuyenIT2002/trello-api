// Bắt buộc những hàm trong Service phải có return để trả về kết quả

import { slugify } from "~/utils/formatters"

const createNew = async (reqBody)=>{
    try {
        // xử lý logic dữ liệu tùy đặc thù dự án
        const newBoard ={
            ...reqBody,
            slug: slugify(reqBody.title)
        }
        return newBoard
    } catch (error) {
        throw error        
    }

}

export const boardService = {
    createNew
}