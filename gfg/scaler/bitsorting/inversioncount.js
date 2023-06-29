// Adobe
// Amazon
// BankBazaar
// Flipkart
// Microsoft
// Myntra


solve : function(array){
    let mod = 1000000007;
    return this.mergesortandcount(array,0,array.length-1);
},
mergesortandcount(array,low,high){
    let mod = 1000000007;
    let mid =  Math.floor(low +(high-low)/2);
    let count = 0;
    if(low <high){
        count += this.mergesortandcount(array,low,mid);
        count += this.mergesortandcount(array,mid+1,high);
        count += this.mergeandcount(array,low,mid,high);
    }
    return count%mod;
},
mergeandcount(array,low,mid,high){
    // let mod = 1
    let mod = 1000000007;
    let swaps = 0;
    let left = [];
    let right = [];
    for(let i=low ; i <= mid;i++ ){
        left.push(array[i]);
    }
    for(let i=mid+1 ; i <= high;i++ ){
        right.push(array[i]);
    }
    let i=0; 
    let j =0;
    let k = low;
    while(i < left.length && j < right.length){
        if(left[i]<= right[j]){
            array[k++] = left[i++];
        } else {
            array[k++] = right[j++];
            swaps += (mid+1)%mod - (low+i)%mod;
        }
    }
    while(i < left.length){
        array[k++]= left[i++];
    }
    while(j < right.length){
        array[k++]= right[j++];
    }
    return swaps%mod;
}