class Solution {
    kthElement(A,B,n,m,k){ 
        //code here
        return this.kth(A,0,B,0,k);
    }
    kth(A,i,B,j,k){
        if(A.length -i> B.length -j){
            return this.kth(B,j,A,i,k);
        }
        if(i>=A.length) return B[j+k-1];
        if(k==1) return Math.min(A[i],B[j]);
        let aMid = Math.min(A.length,Math.floor(k/2));
        let bMid = k-aMid;
        if(A[i+aMid-1] <= B[j+bMid -1]){
            return this.kth(A,i+aMid,B,j,k-aMid);
        }
        return this.kth(A,i,B,j+bMid,k-bMid);
    }
}