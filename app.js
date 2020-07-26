const imessage = require('osa-imessage');
const fs = require('fs');

fs.readFile('beemoviescript.txt',  (error, body) => {
    body = body.toString().replace(/[\r\n]+/gm, ' ').split(' ').filter(word => word);
    setInterval(() => {
        var date = new Date();
        if(date.getHours() === 16 && date.getMinutes() ===  13) {
            body.forEach((word, index) => {
                setTimeout(() => {
                    //Replace '' with the actual name
                    imessage.handleForName('').then(handle => {
                        imessage.send(handle, word)
                    })
                }, 500 * (index + 1));
            });
        }
    }, 10000);
});