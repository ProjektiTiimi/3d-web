import mongoose from 'mongoose';

export interface ICustomer extends mongoose.Document{
    YTunnus: String;
    asiakkaanNimi: String;
    Postitusosoite: String;
    Postinumero: String; 
    Toimipaikka: String;
}

export const CustomerSchema = new mongoose.Schema({
    YTunnus: { type: String },
    asiakkaanNimi: { type: String, required: true },
    Postitusosoite: { type: String, required: true },
    Postinumero: { type: String, required: true },
    Toimipaikka: {  type: String, required: true },
})

const Customer = mongoose.model<ICustomer>("Customer", CustomerSchema);

export default Customer;