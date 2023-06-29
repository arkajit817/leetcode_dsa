function max_of_subarrays(arr, n, k)
	{
        // code here
        let q = [];
        let res = [];
        for(let i=0;i < k;i++){
            while(q.length !==0 && arr[i]>= arr[q[q.length-1]]){
                q.pop();
            }
            q.push(i);
        }
        res.push(arr[q[slidingwindowmaximum.js0]]);
        for(let i=k;i < n;i++){
            while(q.length !==0 && q[0]< i-k+1){
                q.shift();
            }
            while(q.length !==0 && arr[i]>= arr[q[q.length-1]]){
                q.pop();
            }
            q.push(i);
            res.push(arr[q[0]]);
        }
        return res;
    }
// Amazon Directi Flipkart Microsoft
//vvi