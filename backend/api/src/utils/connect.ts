import mongoose from 'mongoose';
import config from 'config';

async function connect(){
    const dbUri = config.get<string>("DBURI");

    try{
        await mongoose.connect(dbUri)
        console.log('Database connection opened');
    } catch(error){
        console.error('Could not connect to database');
        process.exit(1);
    }
     }

export default connect