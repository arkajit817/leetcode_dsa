let k = 3;

let leftIndex = (index) => index * 2 + 1;
let rightIndex = (index) => index * 2 + 2;

function prod(array) {
    let heap = new Array(3).fill(0);
    let ans = new Array(array.length).fill(-1);
    for (let i = 0; i < 3; i++) {
        addNew(heap, array[i]);
    }
    let prod = 1;
    for(let i=0; i < heap.length;i++){
        prod *= heap[i];
    }
    console.log(heap, "heap");
    ans[2] = prod;
    for(let i= 3;i < array.length;i++){
        if(heap[0]< array[i]){
            // prod /= heap[0];
            heap[0] = array[i];
            console.log(heap,"heap11")
            heapify(heap,0);
            // prod *= heap[0];
        }

        prod = 1;
        for(let j=0; j < 3;j++){
            prod *= heap[j];
        }
        ans[i] = prod;
    }
    console.log(ans,"ans")

}


function heapify(heap, index) {
    let left = leftIndex(index);
    let right = rightIndex(index);
    let small = index;
    if (heap[index] > heap[left]) {
        small = left;
    }
    if (heap[right] < heap[small]) {
        small = right;
    }
    if (small !== index) {
        [heap[index], heap[small]] = [heap[small], heap[index]];
        heapify(heap, small);
    }

}

function addNew(heap, ele) {
    if (ele > heap[0]) {
        heap[0] = ele;
        heapify(heap, 0);
    }
}


let array = [1, 2, 3, 4, 5];

prod(array)