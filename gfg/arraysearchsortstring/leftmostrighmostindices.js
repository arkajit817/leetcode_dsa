let array = [2, 1, 1, 2, 1, 5, 6, 5 ];

let leftMin = 0;
let rightMin = 0; let leftMax = 0; let rightMax = 0;
let low = array[0];let high = array[0];
for (let i=0;i< array.length;i++){
    if(array[i]< low){
        low = array[i];
        leftMin = i;
    }
    if(array[i] ==low){
        low = array[i];
        rightMin = i;
    }
    if(array[i] > high){
        high = array[i];
        leftMax = i;
    }
    if(array[i] == high){
        high = array[i];
        rightMax = i;
    }
}
console.log(leftMin,rightMin,leftMax,rightMax);
