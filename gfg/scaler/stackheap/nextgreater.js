function nextLargerElement(arr, n)
{
    // code here
    let stack = [];
    let res = new Array(n).fill(-1);
    for(let i=0 ; i < n;i++){
        // if(stack.length ==0) stack.push(i);
        while(stack.length !=0 && arr[stack[stack.length-1]]< arr[i]){
            res[stack[stack.length-1]] = arr[i];
            stack.pop();
        }
        stack.push(i);
    }
    console.log(res,"res")
    return res;
}


let arr = [1, 3 ,2 ,4];

nextLargerElement(arr,arr.length)