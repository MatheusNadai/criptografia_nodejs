const crypto = require ('crypto');
const alg = 'aes-256-ctr';
const password = 'abcdabcd'


const text = 'Matheus Nadai';
const cipher = crypto.createCipher(alg, password)
