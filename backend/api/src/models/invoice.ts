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
        selite: String;
        kpl: Number;
        hinta: Number;
        alv: Number;
        price: Number;
        total: Number;
    }    
}

export const InvoiceSchema = new mongoose.Schema({        
    
    laskuttaja:{
        ytunnus:{type: String, required: true, get: decrypt, set: encrypt},
        email:{type: String, required: false, get: decrypt, set: encrypt},
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
        selite: {type: String,  required: true, get: decrypt, set: encrypt},
        kpl: {type: Number,  required: true, get: decrypt, set: encrypt},
        hinta: {type: Number,  required: true, get: decrypt, set: encrypt},
        alv: {type: Number,  required: true, get: decrypt, set: encrypt},
        price: {type: Number,  required: true, get: decrypt, set: encrypt},
        total: {type: Number,  required: true, get: decrypt, set: encrypt}

    }},
    {
        versionKey: false,
        toObject: { getters: true},
        toJSON: { getters: true}
    }
)

const Invoice = mongoose.model<Invoice>("Invoice", InvoiceSchema);

export default Invoice;