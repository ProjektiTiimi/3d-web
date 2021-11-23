require('dotenv').config()
import * as fs from 'fs';
const crypto1 = require('crypto');

function createEncryptionKey(len:number){
    return crypto1.randomBytes(len/2).toString('hex');
}

const ENC_KEY = createEncryptionKey(32);
const IVString = createEncryptionKey(16);

console.log("encryption key created: " + ENC_KEY);
console.log("ivstring created: " + IVString);

process.env.ENCRYPTION_KEY=ENC_KEY;
process.env.IVSTRING=IVString;

fs.writeFile('.env', `ENCRYPTION_KEY= ${ENC_KEY}\nIVString= ${IVString}`, function (err) {
    if (err) return console.log(err);
  });

