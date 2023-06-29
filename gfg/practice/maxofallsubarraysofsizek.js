let arr = [1 ,3 ,2 ,1, 4, 5, 2 ,3 ,6];
let k = 3;
let q = [];

let res = [];
for(let i=0;i < k;i++){
    while(q.length >0 && arr[q[q.length-1]] <= arr[i] ){
        q.shift();
    }
    q.unshift(i);
    res.push(arr[q[q.length-1]]);
}

for(let i =k;i < arr.length;i++){
    while(q[0] < i-k+1){
        q.shift();
    }
    while(q.length>0 && arr[q[q.length-1]]<= arr[i]){
        q.shift();
    }
    q.unshift(i);
    res.push(arr[q[q.length-1]]);
}

console.log(res);
