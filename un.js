const fs = require('fs');

fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    console.log('data :>> ', data);

    fs.unlinkSync('file.txt', (unlinkErr) => {
        if (unlinkErr) throw unlinkErr;
    });
});