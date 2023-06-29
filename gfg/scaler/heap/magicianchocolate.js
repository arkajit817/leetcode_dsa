let arr = [2, 4, 6, 8, 10];
let b = 5;

function nchoc(arr, t) {
    let heap = [];
    for (let i = 0; i < arr.length; i++) {
        heap.push(arr[i]);
        heapifyUp(heap, i);
    }
    console.log(heap,"heap")
    let total = 0;
    for(let i=0; i < t;i++){
        let eaten = heap[0];
        total += eaten;
        heap[0] = heap[heap.length-1];
        heap.pop();
        heap.push(Math.floor(eaten/2));
        heapifyDown(heap,0);
    }
    console.log(total)
    return total;
}


function heapifyUp(heap, index) {
    let currIndex = index;
    while (currIndex > 0) {
        let pi = Math.floor((currIndex - 1) / 2);
        if (heap[pi] >= heap[currIndex]) {
            break;
        }
        [heap[pi], heap[currIndex]] = [heap[currIndex], heap[pi]];
        currIndex = pi;
    }
}

function heapifyDown(heap, index) {
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let big = index;
    if(heap[left]> heap[big] ){
        big = left;
    }
    if(heap[right]> heap[big]){
        big = right;
    }
    if(big != index){
        [heap[big],heap[index]] = [heap[index],heap[big]];
        heapifyDown(heap,big);
    }
}

nchoc(arr,b);