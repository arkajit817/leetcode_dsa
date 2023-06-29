let n = 3 ; let v = 4;
let coins = [1,2,3];

function count(coins,n,v){
    if(v==0) return 1;
    if(v < 0) return 0;
    if(n <=0 && v >=1) return 0;
    return count(coins,n-1,v) + count(coins,n,v- coins[n-1]);
}

console.log(count(coins,n,v));