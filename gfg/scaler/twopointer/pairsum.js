 function solve( array, k){
    let map = {};
    let count =0;
    for(let i=0; i < array.length;i++){
        console.log(map,"map")
        if(map[k- array[i]]){
            count += map[k-array[i]];
        }
        map[array[i]] = map[array[i]] ? map[array[i]] +1: 1;
    }
    return count;
    
}


console.log(solve([1,2,6,7,6,9,6,9],13))
//  1 1 1  k = 2 