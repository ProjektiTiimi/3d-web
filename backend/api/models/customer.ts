import {Schema, model, connect, Document} from 'mongoose';

export interface ICustomer extends Document{
    YTunnus: String;
    asiakkaanNimi: String;
    Postitusosoite: String;
    Postinumero: String; 
    Toimipaikka: String;
}

export const CustomerSchema = new Schema({
    YTunnus: { type: String},
    asiakkaanNimi: { String },
    Postitusosoite: { String },
    Postinumero: { String },
    Toimipaikka: {  String }
});

const Customer = model<ICustomer>('Customer', CustomerSchema);

export default Customer;