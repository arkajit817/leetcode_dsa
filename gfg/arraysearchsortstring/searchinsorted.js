function searchInsertK(arr,N, K)
    {
        //your code
        let l = 0;
        let r = N-1;
        
        while(l <= r){
            let mid = Math.floor((l+r)/2);
            if(arr[mid] == K) return mid;
            else if(arr[mid]< K){
                l= mid+1;
            } else {
                r= mid-1
            }
        }
        return r+1;
    }


    console.log(searchInsertK([1, 3, 5, 6 ],4,2))