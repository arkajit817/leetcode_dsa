let array = [[1, 2, [9]], [3, 4]]

// let flatarray = array.reduce((acc,curr)=>{
//     return acc.concat(...curr);
// },[]);

// console.log(flatarray);

// var flatten = (array) => 
//     array.reduce((flattened, curr) => 
//          flattened.concat(Array.isArray(curr) ? flatten(curr) : [curr])
//     , []);
// ;
// var flatten = function (array) {
//     return array.reduce((acc, curr) => {
//          acc.concat(Array.isArray(curr) ? flatten(curr) : [curr]);
//     }, []);
// }
// let flatten = a=> a.reduce((acc,curr)=> acc.concat(Array.isArray(curr) ? flatten(curr) : [curr]),[])


// var flatten = (arrayOfArrays) =>
//     arrayOfArrays.reduce((flattened, item) =>
//         flattened.concat(Array.isArray(item) ? flatten(item) : [item]),
//          []);





var flatten = (array)=> array.reduce((acc,curr)=> acc.concat(Array.isArray(curr) ? flatten(curr): [curr]),[])
console.log(flatten(array))


var flatten = (array)=> array.reduce((acc,curr)=> acc.concat(Array.isArray(curr)? flatten[curr]: [curr]),[]);


let flatten = (array)=> array.reduce((acc,curr)=> Array.isArray(curr)? flatten([curr]): [curr], []);