const crypto = require('crypto');
const now = Date.now();

function logHashTime() {
    const pass = crypto.pbkdf2('a', 'a', 100000, 512, 'sha512', () => {
        console.log(`The time to hash this word was ${Date.now() - now}`)
        console.log(pass);
    })
}

logHashTime();
logHashTime();
logHashTime();
logHashTime();