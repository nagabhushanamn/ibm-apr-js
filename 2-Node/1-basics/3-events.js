

// All objects that emit events are instances of the EventEmitter class. 

const EventEmitter = require('events');

//------------------------------------------------------
// const logger = new EventEmitter();
// logger.on('info', (e) => {
//     console.log(`logging an info : ${e}`);
// });
// logger.on('error', (e) => {
//     console.log(`logging an error : ${e}`);
// });
// logger.emit('info', "info1");
// logger.emit('info', "info2");
// logger.emit('info', "info3");
// logger.emit('error', "error1");

//------------------------------------------------------
// Door
class Door extends EventEmitter {
    open() {
        console.log('door opened..');
        this.emit('open', { floor: 3, doorNum: 305 });
    }
    close() {
        console.log('door closed..');
        this.emit('close', { floor: 3, doorNum: 305 });
    }
}
const door = new Door();
//------------------------------------------------------
// Light
const light = {
    setUp: function () {
        door.on('open', (e) => {
            console.log(`LIGHT ON >>> ${e.floor + " , " + e.doorNum}`);
        });
        door.on('close', (e) => {
            console.log(`LIGHT OFF >>> ${e.floor + " , " + e.doorNum}`);
        });
    }
};

light.setUp();

//------------------------------------------------------


//------------------------------------------------------
// AC
const AC = {
    setUp: function () {
        door.on('open', (e) => {
            console.log(`AC ON >>> ${e.floor + " , " + e.doorNum}`);
        });
        door.on('close', (e) => {
            console.log(`AC OFF >>> ${e.floor + " , " + e.doorNum}`);
        });
    }
};

AC.setUp();

//------------------------------------------------------
setTimeout(() => {
    door.open()
    setTimeout(() => {
        door.close()
    }, 3000);
}, 3000);
