let array = [4,5,12,8,9,10,20,42];
let k =3;
let heap = Array(k).fill(0);
let leftIndex = (index) => index*2 +1;
let rightIndex = (index)=> index*2 +2;

function heapify(index){
    let left = leftIndex(index);
    let right = rightIndex(index);
    let smallest = index;
    if(heap[smallest] > heap[left] ){
        smallest = left;
    }
    if(right < heap.length && heap[right]< heap[smallest]){
        smallest = right;
    }
    if(index !== smallest){
        [heap[smallest],heap[index]] = [heap[index],heap[smallest]];
        heapify(smallest);
    }
}

function addNew(item){
    // console.log(heap[0],item)
    let min = heap[0];
    if(min < item){
        heap[0] = item;
        heapify(0);
    }
}

function kthlargest(){
    let res = Array(k-1).fill(-1);
    for(let i=0;i< 8;i++){
        addNew(array[i]);
        if(i >=k-1){res.push(heap[0])};
    }
    console.log(res,"res");
}
kthlargest();

// / Amazon Cisco Hike OYO Rooms Walmart Microsoft