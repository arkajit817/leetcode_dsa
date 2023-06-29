 function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
 }
 var z = x();
 console.log(z);
 z();

 //f y()
 //100;


 function x(){
    for(var i=0; i < 5;i++){
        setTimeout(()=>{
            console.log(i);
        },i*1000);
    }
 }
 x();

 //5
 //5
 //5
 //5
 //5


 //if we want to print 1,2,3,4,5 use let coz let is block scope
 function x(){
    for(let i=0; i < 5;i++){
        setTimeout(()=>{
            console.log(i);
        },i*1000);
    }
 }
 x();

 //if we need to do it usimg var 
 function x(){
    for(var i=0; i < 5;i++){
        function y(val){
            setTimeout(function(){
                console.log(val);
            },val*1000);
        }
        y(i)
        
    }
 }
 x();

 //1
 //2
 //3
 //4
 //5