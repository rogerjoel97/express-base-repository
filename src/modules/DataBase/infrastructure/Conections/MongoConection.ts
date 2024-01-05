import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class MongoDataBaseConection {
    async connect( retryCount: number = 5): Promise<void> {
        let currentRetry = 0;
        
        const tryConnect = async (): Promise<void> => {
            try {
                await mongoose.connect(process.env.MONGODB_URI!, {
                    retryWrites: true,
                });
                console.log('Conected to MongoDB Data Base')
            } catch (error) {
                currentRetry++;
                console.error(`Error conecting to MongoDB (Attempt ${currentRetry}/ ${retryCount}):`, error )

                if(currentRetry < retryCount) {
                    const delay = 5000
                    console.log(`Retrying connection in ${delay/1000} seconds....`)
                } else {
                    console.error('Max retry attemps reached, Exiting....')
                    throw error;
                }
            }
            
        };
        await tryConnect();
    }
}

export default new MongoDataBaseConection();