

const fs = require('fs');


console.log("----------------------------------------------");
console.log(process.pid + " - start");
console.log("----------------------------------------------");
const callback = function (err, data) {
    if (err) throw err;
    console.log(data.toString('utf8'));
    console.log("----------------------------------------------");
}
console.log('reading veg-menu.txt');
fs.readFile('./veg-menu.txt', callback);
console.log('reading non-veg-menu.txt');
fs.readFile('./non-veg-menu.txt', callback);
console.log("----------------------------------------------");
console.log('dosomething else');
console.log("----------------------------------------------");