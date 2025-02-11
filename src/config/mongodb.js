import {env} from './environment'
import 'dotenv/config'
import { MongoClient, ServerApiVersion } from "mongodb";

let trelloDatabaseInstance = null;

// khởi tạo 1 đối tượng client để kết nối tới mongodb
const mongoClientInstance = new MongoClient(env.MONGODB_URI,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);

// kết nối tới mongodb
export const CONNECT_DB = async ()=>{
    // gọi kết nối tới mongodb atlas với uri được khai báo trong thân mongoClientInstance
    await mongoClientInstance.connect() 
    // kết nối thành công thì lấy ra database theo tên và gán cho trelloDatabaseInstance
    trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

// đóng kết nối với mongodb
export const CLOSE_DB = async ()=>{
    await mongoClientInstance.close()
}                                       

// export ra cái trelloDatabaseInstance sau khi đã connect thành công, lưu ý chỉ luôn gọi cái này sau khi đã kết nối thành công tới mongodb
export const GET_DB = ()=>{
    if(!trelloDatabaseInstance) throw new Error("Must connect to database first!");
    return trelloDatabaseInstance   
}
