import mongoose from 'mongoose';
const { encrypt, decrypt } = require('./cipher');

export interface Invoice extends mongoose.Document{
    laskuttaja:{
        ytunnus:String;
        email:String;
        tilinumero:String;
    }
    asiakkaanTiedot:{
        YTunnus: String;
        asiakkaanNimi: String;
        Postitusosoite: String;
        Postinumero: String; 
        Toimipaikka: String;
    }
    laskunTiedot:{
        viitenumero: String;
        eräpäivä: String;
        riviTiedot: String;
    }    
}

export const InvoiceSchema = new mongoose.Schema({

    laskuttaja:{
        ytunnus:{type: String, required: true, get: decrypt, set: encrypt},
        email:{type: String, required: true, get: decrypt, set: encrypt},
        tilinumero:{type: String, required: true, get: decrypt, set: encrypt}
    },
    asiakkaanTiedot:{
        YTunnus: {type: String, required: true, get: decrypt, set: encrypt},
        asiakkaanNimi: {type: String, required: true, get: decrypt, set: encrypt},
        Postitusosoite: {type: String, required: true, get: decrypt, set: encrypt},
        Postinumero: {type: String, required: true, get: decrypt, set: encrypt},
        Toimipaikka: {type: String, required: true, get: decrypt, set: encrypt},
    },
    laskunTiedot:{
        viitenumero: {type: String, required: true, get: decrypt, set: encrypt},
        eräpäivä: {type: String, required: true, get: decrypt, set: encrypt},
        riviTiedot: {type: String, required: true, get: decrypt, set: encrypt}
    }},
    {
        versionKey: false,
        toObject: { getters: true},
        toJSON: { getters: true}
    }
)

const Invoice = mongoose.model<Invoice>("Invoice", InvoiceSchema);

export default Invoice;