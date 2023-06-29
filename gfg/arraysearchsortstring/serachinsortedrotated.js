class Solution {
    Search(arr,k){
        //code 
        let start = 0;
        let end = arr.length -1;
        while(start<=end){
            let mid = Math.floor((end+start)/2);
            if(arr[mid]==k ) {return mid;}
            if(arr[mid] >= arr[start]){
                if(k>= arr[start] && k<= arr[mid]){
                    end = mid -1;
                } else {
                    start = mid+1;
                }
            } else {
                if(k>=arr[mid] && k <=arr[end]){
                    start = mid+1;
                } else {
                    end = mid-1;
                }
            }
        }
        // console.log(start,end)
        return -1;
    }
    
}