function x(){
    var x = 7;
    return function y(){
        console.log(x);
    }
}

var z = x();
z();