solve: function (array) {
    let heap = [];
    for (let i = 0; i < array.length; i++) {
        heap.push(array[i]);
        this.heapifyUp(heap,i);
    }
    let cost = 0;
    while(heap.length> 1){
        let small = heap[0];
        heap[0] = heap[heap.length-1];
        heap.pop();
        this.heapifyDown(heap,0);

        let secsmall = heap[0];
        heap[0] = heap[heap.length-1];
        heap.pop();
        this.heapifyDown(heap,0);
        cost += (small +secsmall);
        heap.push(small+ secsmall);
        this.heapifyUp(heap,heap.length -1);
    }
    return cost;
    
},

heapifyUp(heap,index){
    let currIndex = index;
    while(currIndex>0){
        let pi = Math.floor((currIndex-1)/2);
        if(heap[pi]<= heap[currIndex]){
            break;
        }
        [heap[pi],heap[currIndex]] = [heap[currIndex],heap[pi]];
        currIndex = pi;
    }
},

heapifyDown(heap,index){
    let left = index*2 +1;
    let right = index*2 +2;
    let small = index;
    if(heap[left]< heap[small]){
        small = left;
    }
    if(heap[right]< heap[small]){
        small = right;
    }
    if(small != index){
        [heap[small],heap[index]] = [heap[index],heap[small]];
        this.heapifyDown(heap,small);
    }
}

//VVI