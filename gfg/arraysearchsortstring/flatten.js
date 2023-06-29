const array = [[1,2],[3,[4,[5]]]]; 

//[1,2,3,4,5]

function flatten(arr){
   return arr.reduce(function(flat,toFlatten ){
        return flat.concat(Array.isArray(toFlatten)?  flatten(toFlatten) : toFlatten);
    }, [])
}

// flatten(array);
console.log(flatten(array));