'use strict';
const crypto112 = require('crypto');

// Must be 256 bits (32 characters)
const ENCRYPTION_KEY = "MZIbF8jCkxFYJovznHhqi6OA7FGU5mxF";
// Must be 16 character for AES-256-CBC
const ivString = "LuU6OGSpiVNwSFYY";

function encrypt(text:string) {
    text = text.toString();
    let iv = Buffer.from(ivString);
    let cipher = crypto112.createCipheriv(
        'aes-256-cbc',
        Buffer.from(ENCRYPTION_KEY),
        iv
    );
    let encrypted = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text:string) {
    if (!text) return text;

    // Backward compatibilty
    // If a non-encrypted string is being decrypted, function throws an error
    // In that case, we simply want to return the string
    try {
        let textParts:any = text.split(':');
        let iv = Buffer.from(textParts.shift(), 'hex');
        let encryptedText = Buffer.from(textParts.join(':'), 'hex');
        let decipher = crypto112.createDecipheriv(
            'aes-256-cbc',
            Buffer.from(ENCRYPTION_KEY),
            iv
        );
        let decrypted = decipher.update(encryptedText);

        decrypted = Buffer.concat([decrypted, decipher.final()]);

        return decrypted.toString();
    } catch (error) {
        return text;
    }
}

module.exports = { decrypt, encrypt };