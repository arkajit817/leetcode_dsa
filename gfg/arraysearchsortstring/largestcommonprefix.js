class Solution {
    longestCommonPrefix(arr,n){ 
        //code here
        // console.log(arr,"arr")
        let res = "";
        let str = arr[0];
        if(n==1) return arr[0];
        for(let i =1;i < n;i++){
            let final = this.prefix(str,arr[i]);
            // console.log(final,"fin")
            if(final.length==0) return -1;
            str = final;
            res = final;
        }
        // if(res.length>0){
            return res;
        // }
        // return -1;
    }
    
    prefix (str1,str2){
        let i=0;let j =0;
        // console.log(i,j);
        let res = "";
        for(i=0,j=0;i< str1.length,j < str2.length;i++,j++){
            if(str1[i] !== str2[j]){
                break;
            }
            res += str1[i];
            
        }
        return res;
    }
}