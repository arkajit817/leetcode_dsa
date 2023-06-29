let A = [2, 3, 6, 7, 9];
let B = [1, 4, 8, 10];

let k = 7;

function kth(A,i,B,j,k){
    if(A.length -i > B.length -i){
        kth(B,j,A,i,k);
    };
    if(i >= A.length){
        return B[j+k-1];
    }
    if(k==1){
        return Math.min(A[i],B[j]);
    }
    let aMid = Math.min(Math.floor(k/2), A.length-i);
    // console.log(aMid,"amid");  
    let bMid = k-aMid;
    if(A[i+aMid-1] <= B[j+bMid-1]){
       return kth(A,i +aMid,B,j,k-aMid);
    }  
    return kth(A,i,B,j+bMid,k-bMid);

}
console.log(kth(A,0,B,0,7));