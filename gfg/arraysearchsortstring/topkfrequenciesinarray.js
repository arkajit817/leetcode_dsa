

let topK = function(arr, k) {
    // code here
    let obj = {};
    for(let i=0;i < arr.length;i++){
        obj[arr[i]] = obj[arr[i]]? obj[arr[i]]+1 : 1;
    }
    let array = Object.entries(obj);
    array.sort((a,b)=> b[1]-a[1]);
    console.log(array)
    let res = [];
    for(let i=0;i< k;i++){
        res.push(array[i][0])
    }
    return res;
}
let arr = [1,1,1,2,2,3];
console.log(topK(arr,2));


//  Amazon Microsoft