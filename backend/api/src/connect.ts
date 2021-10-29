import mongoose from 'mongoose';

export default (db: string) => {
    const connect = () => {
        mongoose.connect(db)
        .then(() => {
            // Success
            return console.log('Connected to', db);
        })
        .catch(error =>{
            console.log(error);
            return process.exit(1);
        });
    };
    connect();

}