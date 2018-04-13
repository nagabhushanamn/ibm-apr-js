
console.log('-index.js-');

//---------------------------------------------------------
// var ibmApp = ibmApp || {};
// ibmApp.mod1.doWork();
//---------------------------------------------------------

// commonJS
let mod1 = require('./greet');
mod1.greet('en');
mod1.greet('ka');
mod1.greet();
