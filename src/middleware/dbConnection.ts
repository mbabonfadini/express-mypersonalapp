import mongoose from "mongoose";


export default async function dbConnection(req: any = null, res: any = null, next: any = null){
    try{

        const URL: string = process.env.MONGODB_URL as string

        await mongoose.connect(URL, {});
        try {
            next()
        }
        catch (error) {
            throw new Error(error)
        }

        return mongoose.connection;
    }
    catch (error){
        throw new Error(error)
    }

}