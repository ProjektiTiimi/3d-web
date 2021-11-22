import mongoose from 'mongoose';
const { encrypt, decrypt } = require('./cipher');

export interface ICustomer extends mongoose.Document{
    YTunnus: String;
    asiakkaanNimi: String;
    Postitusosoite: String;
    Postinumero: String; 
    Toimipaikka: String;
}

export const CustomerSchema = new mongoose.Schema({
    YTunnus: { type: String, required: true,  get: decrypt, set: encrypt   },
    asiakkaanNimi: { type: String, required: true,  get: decrypt, set: encrypt  },
    Postitusosoite: { type: String, required: true,  get: decrypt, set: encrypt  },
    Postinumero: { type: String, required: true,  get: decrypt, set: encrypt  },
    Toimipaikka: {  type: String, required: true,  get: decrypt, set: encrypt  },
    },
    {
        versionKey: false,
        toObject: { getters: true},
        toJSON: { getters: true}
    }
)

const Customer = mongoose.model<ICustomer>("Customer", CustomerSchema);

export default Customer;