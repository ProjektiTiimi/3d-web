import mongoose from 'mongoose';

export interface IBiller extends mongoose.Document{
    YTunnus: String;
    asiakkaanNimi: String;
    Postitusosoite: String;
    Postinumero: String; 
    Toimipaikka: String;
    Puhelin: String;
    Kotisivu: String;
    Sahkoposti: String;
}

export const BillerSchema = new mongoose.Schema({
    YTunnus: { type: String, required: true },
    asiakkaanNimi: { type: String, required: true },
    Postitusosoite: { type: String, required: true },
    Postinumero: { type: String, required: true },
    Toimipaikka: {  type: String, required: true },
    Puhelin: {  type: String },
    Kotisivu: {  type: String },
    Sahkoposti: {  type: String }
})

const Biller = mongoose.model<IBiller>("Biller", BillerSchema);

export default Biller;