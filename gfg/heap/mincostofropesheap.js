let heap = [];

let leftIndex = (index)=> index*2+1;
let rightIndex = (index)=> index*2+2;

function heapify(heap,index){
    let left = leftIndex(index);
    let right = rightIndex(index);
    let smallest = index;
    if(heap[smallest]> heap[left]){
        smallest = left;
    }
    if(right < heap.length && heap[right]> heap[smallest]){
        smallest = right;
    }
    if(smallest !=index){
        [heap[index],heap[smallest]]= [heap[smallest],heap[index]];
        heapify(heap,smallest);
    }
}

function insertKey(item,heap){
    heap.push(item);
    let sizeOfHeap = heap.length-1;
    let pi = Math.floor(sizeOfHeap/2);
    while(pi>=0 && heap[sizeOfHeap]< heap[pi]){
        [heap[sizeOfHeap],heap[pi]]= [heap[pi],heap[sizeOfHeap]];
        sizeOfHeap = pi;
        pi = Math.floor(sizeOfHeap/2);
    }
}

function extractMin(heap){
    let min = heap.shift();
    heapify(heap,0);
    return min;
}

function mincost(){
    if(heap.length ==0) return 0;
    if(heap.length ==1) return heap[0];
    let cost =0;
    while(true){
        let min1 = extractMin(heap);
        let min2 = extractMin(heap);
        let newKey = min1+ min2;
        cost += newKey;
        if(heap.length ==0) {
            break;
        } 
        insertKey(newKey,heap);
    }
    return cost;
}