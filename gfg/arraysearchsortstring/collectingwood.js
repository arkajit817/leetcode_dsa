let array = [1, 2, 1, 2];
let sortedArray = array.sort();
function woodCollected(n,m){
    let sum = 0;
    for(let i=n-1;i>=0;i--){
        if(sortedArray[i] -m <=0){
            break;
        } 
        sum += sortedArray[i]-m;
    }
    // console.log(sum);
    return sum;
}
function wood(array,k){
    // console.log('kk')
    let sorted = array.sort();
    let l = 0;
    let h = sorted[sorted.length-1];
    while(l<=h){
        // console.log('lll')
        let mid = l + Math.floor((h-l)/2);
        let collected = woodCollected(array.length,mid);
        console.log(collected,"collected")
        if(collected == k) return mid;
        else if(collected < k){
            h = mid-1;
         } else {
            l = mid+1;
         }
    }
    return -1;
}

console.log(wood(array,2))