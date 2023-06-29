let  multiply= function(x,y){
    console.log(x*y);
}

let multiplybythreefour = multiply.bind(this,3);
multiplybythreefour(4);

let multiplybyfourfive = multiply.bind(this,4,5);
multiplybyfourfive(8);