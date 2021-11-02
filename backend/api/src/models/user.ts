import * as mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

export interface IUser extends mongoose.Document {
    username: string;
    password: string;
}

export const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
})


UserSchema.methods.comparePassword = function (candidatePassword: string, callback: any){
    bcrypt.compare(candidatePassword, this.password, (err: Error, isMatch: boolean) => {
        callback(err, isMatch);
    })
}

const User = mongoose.model<IUser>("User", UserSchema);
export default User;