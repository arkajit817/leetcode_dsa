let array = [4, 5, 6, 7, 8, 9, 1, 2, 3 ];


function search(array,l,h,key){
    if(l>h) return -1;
    let mid = Math.floor((l+h)/2);
    if(array[mid] == key) return mid;
    if(array[l]  <= array[mid]){
        if(key >= array[l] && key <= array[mid]){
            return search(array,l,mid-1,key);
        }
        return search(array,mid+1,h,key);
    }
    if(key>= array[mid] && key <= array[h]){
        return search(array,mid+1,h,key);
    } 
    return search(array,l,mid-1,key);
}
console.log(search(array,0,array.length-1,1));