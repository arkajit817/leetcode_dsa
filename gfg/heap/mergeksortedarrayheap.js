let array = [[1,2,3,4],[2,2,3,4],[5,5,6,6],[7,8,9,9]];
let k =4;
let heap = Array(k).fill({val : 0,c: 0,r :0});

let leftIndex = (index)=> index*2+ 1;
let rightIndex = (index)=> index*2+ 2;

function heapify(index){
    let left = leftIndex(index);
    let right = rightIndex(index);
    let smallest = index;
    if(left < heap.length && heap[left]['val']< heap[index]['val']){
        smallest = left;
    }
    if(right < heap.length && heap[right]['val']< heap[smallest]['val']){
        smallest = right;
    }
    if(index != smallest){
        let temp = heap[index];
        heap[index] = heap[smallest];
        heap[smallest] = temp;
        heapify(smallest);
    }
}

function addNew(item,c,r){
    heap[0]= {"val" :item,"c": c,"r" : r};
    heapify(0);
}

function merge(array){
    let res = [];
    let n = Math.min(array[0].length);
    for(let j=0;j <k;j++){
        addNew(array[j][0],0 ,j);
    }

    for(let i=0;i < k*array.length;i++){
    let top = heap[0];
        res.push(top.val);
        if(top.c < array[top.r].length-1){
            addNew(array[top.r][top.c+1],top.c+1,top.r);
        }else {
            addNew(Number.MAX_SAFE_INTEGER,0,0)
        }
    }
    console.log(res,"res")
}
merge(array);

// / Amazon Citrix Flipkart Microsoft VMWare

//vvi heap