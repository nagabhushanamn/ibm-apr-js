

const fs = require('fs');


console.log("----------------------------------------------");
console.log(process.pid + " - start");
console.log("----------------------------------------------");
const vegMenu = fs.readFileSync('./veg-menu.txt', 'utf8');
console.log(vegMenu);
console.log("----------------------------------------------");
console.log('dosomething else');
console.log("----------------------------------------------");