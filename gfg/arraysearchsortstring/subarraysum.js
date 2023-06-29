function findSubArraySum(arr,n,k){
    //code here
    let obj = {};
    let res = 0;
    let currsum = 0;
    for(let i=0;i < n;i++){
        currsum += arr[i];
        // if(arr[i] == k) res++;
        console.log(res,"res")
        if(obj.hasOwnProperty(currsum -k)){
            res += obj[currsum-k];
        console.log(res,"resoin")
            
        }
        if(obj.hasOwnProperty(currsum)){
            obj[currsum]++;
        } else {
            obj[currsum] =1;
        }
        console.log(obj,"obj")
    }
    return res;
    
}

console.log(findSubArraySum([1 ,-7, 4, -3, -3],5,-3));