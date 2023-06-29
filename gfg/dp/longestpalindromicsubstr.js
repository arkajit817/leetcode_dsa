function find(str) {
    let n = str.length;
    // let dp = Array(n).fill(Array(n).fill(0));
    let dp = Array(n).fill().map(()=>Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }
    // console.log(dp,"dp")

    let start = 0;
    let maxlength = 1;
    for (let i = 0; i < n - 1; i++) {
        if (str[i] == str[i + 1]) {
            dp[i][i + 1] = 1;
            start = i;
            maxlength = 2;
        }
    }
    console.log(dp,"dp")

    for(let i=3;i <= n;i++){
        for(let j=0; j < n-i+1;j++){
            let k = j+i-1;
            if(dp[j+1][k-1] ==1 && str[j] == str[k]){
                dp[j][k] = 1;
                if(i > maxlength){
                    maxlength = i;
                    start = j;
                }
            }
        }
    }
    return maxlength;

}
console.log(find("forgeeksskeegfor"));


// function profit(n,arr){
//     let totalMax = 0;
//     for(let i=0;i < n;i++){
//         let curr_max = arr[i];
//         let val = arr[i];
//         for(let j= i+1;j< n;j++){
//             if(val !=0 && arr[j]%val ==0){
//                 curr_max += arr[j];
//                 val = arr[j]; 
//             }
//         }
//         totalMax = Math.max(curr_max,totalMax);
//     }
//     // console.log(totalMax,"yy")
//     return totalMax;
// }