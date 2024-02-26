import mongoose from "mongoose"
export default async () => {
    try {
        await mongoose.connect(process.env.NEXT_DB_URL);
        console.log("DB connection successfully")
    } catch (error) {
        console.log(error);
    }
}

