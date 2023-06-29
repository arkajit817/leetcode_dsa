function minJumps(arr,n){
    //code here
    if(arr.length ==0) return -1;
    if(arr[0] ==0) return -1;
    let jump = 1;
    let step =arr[0];
    let maxreach = arr[0];
    for(let i=1;i < n;i++){
        if(i == n-1) return jump;
        maxreach = Math.max(maxreach,i+arr[i]);;
        step--;
        if(step==0){
            if(i >= maxreach) return -1;
            jump++;
            step = maxreach -i;
        }
    }
    return -1;
}


// Adobe Amazon Housing.com Moonfrog Labs Walmart Microsoft Google