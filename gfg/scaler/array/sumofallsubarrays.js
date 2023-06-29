subarraySum : function(array){
    let n = array.length;
    let sum = 0;
    let mod = 10^9 + 7;
    for(let i=0 ; i < n ;i++){
        // sum = (sum + (((i+1)*array[i])%mod)*(n-i))%mod;
        sum = BigInt(sum) + BigInt(array[i])*BigInt(i+1)*BigInt(n-i);
    }
    return BigInt(sum);
}


//contribution technique 
//no of subarrays where index i is part of is (i+1)*(n-1)