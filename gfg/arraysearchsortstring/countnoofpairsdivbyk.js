

var canArrange = function(arr, k) {
    let array = arr;
       if(arr.length % 2 !==1) return "false";
   let remfreq = {};
   for(let i=0; i < array.length;i++){
   let rem = ((array[i]%k)+k)%k;
   remfreq[rem] = remfreq[rem]+1 || 1;
   }
   for(let key in remfreq){
       console.log(key,"ll",remfreq[key]);
   if(!!remfreq[k-key] || remfreq[k-key] !== remfreq[key]){
       return "false";
   }
   }
   return "true";

};
console.log(canArrange([1,2,3,4,5,6],10));

//harsh
// Amazon
// Directi
// Arrays
// Hash
// STL