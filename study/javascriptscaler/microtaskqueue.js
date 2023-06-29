function loga(){
    console.log('a')
}
function logb(){
    console.log('b')
}
function logc(){
    console.log('c')
}
function logd(){
    console.log('d')
}

loga;  //sync

setTimeout(logb,0); //callstack

Promise.resolve().then(logc); //microtaskqueue

logd;

//o.p : a d c b
