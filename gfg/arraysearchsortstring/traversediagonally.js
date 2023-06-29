class Solution 
{
    //Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(matrix, r, c)
    {
        // code here
        let m = c;
        let n = r;
        let k=0;let l=0;
        let res = [];
        while(k < m && l < n){
            for(let i=k; i< m;i++){
                res.push(matrix[l][i]);
            }
            l++;
            for(let i=l; i <n;i++){
                res.push(matrix[i][m-1]);
            }
            m--;
            if(l < n){
                for(let i=m-1;i >= k;i--){
                    res.push(matrix[n-1][i]);
                }
                n--;
            }
            
            if(k < m){
                for(let i=n-1;i >=l;i--){
                    res.push(matrix[i][k]);
                }
            }
            k++;
        }
        return res;
    }
}


// BrowserStack D-E-Shaw MakeMyTrip MAQ Software Microsoft Morgan Stanley Nagarro Nearbuy Oracle OYO Rooms Paytm Salesforce Snapdeal