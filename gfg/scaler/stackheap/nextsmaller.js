function immediateSmaller(array,n){
    //code here
    let nextsmaller = new Array(n).fill(-1);
     let stack= [];
     for(let i=0; i < n;i++){
         while(stack.length !=0 && array[stack[stack.length-1]]> array[i]){
             nextsmaller[stack[stack.length-1]] = array[i];
             stack.pop();
         }
         stack.push(i);
         console.log(nextsmaller,"next")
     }
     return nextsmaller;
 }

let arr = [4 ,2 ,1, 5, 3];
 console.log(immediateSmaller(arr,arr.length))