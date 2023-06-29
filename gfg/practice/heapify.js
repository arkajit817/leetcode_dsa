let arr = [];

let leftIndex = (index)=> index*2+1;
let rightIndex = (index)=> index*2+1;

function heapify(index){
    let left = leftIndex(index);
    let right = rightIndex(index);
    let smallest = index;
    if(arr[smallest] && arr[left]< arr[smallest]){
        smallest = left;
    }
    if(arr[right]< arr[smallest]){
        smallest = right;
    }
    if(index !== smallest){
        [arr[smallest],arr[index]] = [ar[index],arr[smallest]];
        heapify(smallest);
    }
}