let array = [1, 3, 3,3, 1, 2];
let n = array.length;
let majindex = 0; let count = 1;

for(let i=1;i < n;i++){
    if(array[i] == array[majindex]){
        count++;
    } else {
        count--;
    }
    if(count ==0){
        majindex = i;
        count = 1;
    }
}

count =0;
for(let i=0; i < n;i++){
    if(array[i] == array[majindex]){
        count++;
    }
}
if(count >=Math.floor(n/2)){
    console.log(array[majindex]);
}
// console.log(array[majindex]);