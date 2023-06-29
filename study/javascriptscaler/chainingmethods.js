let transaction = [100,300,100,-1000];


//filter all positive & return sum

let sum = transaction.filter((a)=> a > 0).reduce((acc,curr)=> {return acc+ curr;},0);

console.log(sum,"sum")