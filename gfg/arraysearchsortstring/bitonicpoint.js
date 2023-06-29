class Solution {
    
    findMaximum(arr,n)
    {
        //your code here
        let start =0;
        let end = n-1;
        while(start <=end){
            // console.log(start,"start",end)
            let mid = start +Math.floor((end-start)/2);
            // console.log(mid,"mid")
            if(arr[mid]> arr[mid+1] && arr[mid]> arr[mid-1]){
                return arr[mid];
            } else if(arr[mid]> arr[mid-1]){
                start = mid+1;
            } else {
                end = mid-1;
            }
        }
        if(arr[n-1]> arr[0]) return arr[n-1]
        return -1;
    }
}