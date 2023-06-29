let array = [5,7,7,5,9,9,13,11,6,6,6,3,3,7,12];

let s = new Set();
let s1= new Set();
let obj = {};
let target = 12;
let count = 0;
if(target%2==0){
    obj[target/2] = 0;
}
for(let i=0;i< array.length;i++){
    let temp = target - array[i];
    if(s.has(temp) && !s1.has(array[i]) && temp !==array[i]){
        count++;
        s1.add(array[i]);
        s1.add(temp);
       
    }
    if(temp == array[i]){
        obj[target/2] = obj[target/2] +1;
    }
    
    s.add(array[i]);
}

console.log(obj);
if(obj[target/2] && obj[target/2] >1) count++;
console.log(count);