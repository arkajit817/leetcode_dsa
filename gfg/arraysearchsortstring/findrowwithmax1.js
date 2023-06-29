class Solution {
    
    rowWithMax1s(arr, n, m){
        // code here
        // console.log(arr,"arr")
        let max = -1;
        let max_row_index = -1;
        for(let i=0; i < arr.length;i++){
            let f = this.first(arr[i],0,arr[0].length-1);
            if(f != -1 && arr[0].length-f > max){
                max = Math.max(arr[0].length- f,max);
                max_row_index = i;
            }
        }
        return max_row_index;
        
        
    }
    
    first(arr,l,r){
        if(l <=r){
        let m = l +Math.floor((r-l/2));
        if((m ==0 || arr[m-1] == 0) && arr[m] == 1){
            return m;
        } else if (arr[m]== 0){
            return this.first(arr,m+1,r);
        }else {
            return this.first(arr,l,m-1);
        }
        
        }
        return -1;
    }
}

let sol = new Solution();
let arr = [0 ,1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
console.log(sol.rowWithMax1s(arr));


// Amazon Snapdeal Microsoft