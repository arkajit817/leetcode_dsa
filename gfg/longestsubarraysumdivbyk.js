function longSubarrWthSumDivByK(arr,n,k){
    //code here
    let obj = {};
    obj["0"]= -1;
    let modarray = [];
    let res =0;
    let sum = 0;
    for(let i=0;i < n;i++){
        sum += arr[i];
        modarray[i] = (sum%k +k)%k;
    }
    for(let i=0;i < n;i++){
        if(modarray[i] ==0){
            res = i+1;
        } else if(obj.hasOwnProperty(modarray[i])){
            if(i- obj[modarray[i]] > res){
                res = i- obj[modarray[i]] ;
            }
        } else {
            obj[modarray[i]] = i;
        }
    }
    return res;
}

// A[] = {2, 7, 6, 1, 4, 5}
// K = 3
// Output: 4
