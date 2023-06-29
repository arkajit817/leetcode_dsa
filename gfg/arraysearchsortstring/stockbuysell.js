let array = [100, 180, 260, 310, 40, 535, 695];
let n = array.length;
let i =0;
let buy = 0;
let sell = 0;
if(n == 1){
    return ;
}
while (i < n-1 && i < n-1){
    while(i < n-1 && array[i+1] <= array[i]){
        i++;
    }
    if(i== n-1) break;
    buy = i;
    i++;
    while(i < n-1 && array[i] > array[i-1]){
        i++;
    }
    sell = i-1;
    console.log(array[buy],"---", array[sell]);
}
