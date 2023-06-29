function solve(array) {
    let n = array.length;
    let m = array[0].length;
    let move = new Array(n).fill(0).map(() => new Array(m).fill(0));
    let ans = [];
    // let vis = new Array(n).fill(0).map(() => new Array(m).fill(0));
    if(array[0][0] == 1) maze(0,0,move);
     function maze(i,j,move){
         if(i == n-1 && j == m-1 && array[i][j] == 1){
             move[i][j] = 1;
             ans.push(JSON.parse(JSON.stringify(move)));
             move[i][j] = 0;
             return ;
         }
         move[i][j] = 1;
         if(i +1 < n && array[i+1][j]== 1){
             maze(i+1,j,move);
         }
         if(j +1 < m && array[i][j+1]== 1){
             maze(i,j+1,move);
         }
         move[i][j] = 0;

    }
    
    return ans.length >0 ? ans[0]: -1;
}


// Amazon
// Drishti-Soft
// Expedia
// Flipkart
// Grofers
// MakeMyTrip
// Paytm
// Visa
// Yatra.com
// Zycus
// Backtracking
