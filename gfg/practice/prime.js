function isPrime(n){
    if(n <=1){
        return false;
    }
    for(let i=2;i < n;i++){
        if(n%i ==0) return false;
    }
    return true;
}

function prime(n){
    for(let i=2;i <=n;i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}
prime(13);