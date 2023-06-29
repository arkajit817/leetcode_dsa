function first(){
    return "first";
}

function second(){
    return "second";
}

let callfunction = second();

//callstack
//first // it'll pop & return
//second //again first will push at top
//main() --> anonymous function then second will push

//chrome allows 16000 frames of callstack