let array = [1, 9, 3, 10, 4, 20, 2 ];
let n = array.length;
let s = new Set();
for(let i=0;i < n;i++){
    s.add(array[i]);
}
let ans = 0;
for (let i=0; i < n;i++){
    if(!s.has(array[i]-1)){
        let j = array[i];
        while(s.has(j)){
            j++;
        }
        ans = Math.max(ans,j- array[i]);
    }
}
console.log(ans);