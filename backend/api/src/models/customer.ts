import mongoose from 'mongoose';
import {MongoClient} from "mongodb";

export interface ICustomer extends mongoose.Document{
    YTunnus: String;
    asiakkaanNimi: String;
    Postitusosoite: String;
    Postinumero: String; 
    Toimipaikka: String;
}

export const CustomerSchema = new mongoose.Schema({
    YTunnus: { type: String, required: true},
    asiakkaanNimi: { type: String, required: true},
    Postitusosoite: { type: String },
    Postinumero: { type: String },
    Toimipaikka: {  type: String }
})

const Customer = mongoose.model<ICustomer>("Customer", CustomerSchema);

export default Customer;