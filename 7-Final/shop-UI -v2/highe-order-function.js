

function f1() {
    console.log('im f1');
}
function f2() {
    console.log('im f2');
}
function wrapper(f) {
    let newF = function () {
        console.log('log before..');
        f();
        console.log('log after..');
    }
    return newF;
}



let newF2 = wrapper(f2);
newF2();