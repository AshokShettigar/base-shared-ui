import CryptoJS from 'crypto-js/aes';
import hex from 'crypto-js/enc-hex';
import base64 from 'crypto-js/enc-base64';
import utf8 from 'crypto-js/enc-utf8';

const SALT = 'portal';

export const encrypt = plainText => {
    const b64 = CryptoJS.encrypt(plainText, SALT).toString();
    const e64 = base64.parse(b64);
    return e64.toString(hex);
};

export const decrypt = cipherText => {
    const reb64 = hex.parse(cipherText);
    const bytes = reb64.toString(base64);
    const decryptValue = CryptoJS.decrypt(bytes, SALT);
    return decryptValue.toString(utf8);
};
