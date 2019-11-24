const crypto = require('crypto');
const secret ='mysecret';

module.exports.hashPassword = (plainText) => {
    const hash = crypto
                        .createHmac('sha256', secret)
                        .update(plainText)
                        .digest('hex');
    return hash;
}