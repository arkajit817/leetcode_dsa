let array = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
let n = array.length;
let end = 0;
let jump = 0;
let max_reach = 0;

for(let i=0; i < n;i++){
    max_reach = Math.max(max_reach, array[i]+i);
    if(i== end){
        jump++;
        end = max_reach;
    }
    
}
console.log(jump);