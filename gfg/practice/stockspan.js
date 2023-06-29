let array = [100, 180, 260, 310, 40, 535, 695];
let n = array.length;

let buy = 0;
let sell = 0;
let i = 0;
while(i < n-1){
    while(array[i+1] <= array[i]){
        i++;
    }
    buy = array[i];
    i++;
    while(array[i]> array[i-1]){
        i++;
    }
    sell = array[i-1];
    console.log(buy,"buy",sell,"sell");
}
