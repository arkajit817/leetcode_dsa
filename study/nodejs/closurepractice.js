function outer(){
    var x = 10;
    function inner(){
        console.log(x);
    }
    return inner;
}

let outer_call = outer();
outer_call();

// function x(){
//     for(var i=0; i < 5;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },i*1000)
//     }
// }
// x();

// function x(){
//     for(let i=0; i < 5;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },i*1000)
//     }
// }
// x();

function x(){
    for(var i=0; i < 5;i++){
        function y(val){
            setTimeout(()=>{
                console.log(val);
            },val*1000 )
        }
        y(i);
        
    }
}
x();

function x(){
    for(var i=0 ; i < 5;i++){
        function y(val){
            setTimeout(()=>{
                console.log(val);
            }, val*1000);
        }
        y();
    }
}
x()