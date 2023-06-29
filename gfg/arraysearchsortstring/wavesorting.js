class Solution {
    //Function to sort the array into a wave-like array.
    convertToWave(arr, n){
        // code here
        // console.log("pioj")
        let i=0;
        let j=0;
        // console.log(i,j)
        while (i<= n && j <= n){
            // console.log("oo")
            if(arr[i]<  arr[i+1]){
                j++;
                [arr[i],arr[j]] = [arr[j],arr[i]];
                i +=2;
                j++;
                // console.log(arr,"ll")
            }else {
                i++;
            }
        }
    }
}