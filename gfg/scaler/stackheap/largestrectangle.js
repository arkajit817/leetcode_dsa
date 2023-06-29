function largestRectangleArea(array) {
    let n = array.length;
    let nextsmaller = new Array(n).fill(n);
    let stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length != 0 && array[stack[stack.length - 1]] >= array[i]) {
            nextsmaller[stack[stack.length - 1]] =i ;
            stack.pop();
        }
        stack.push(i);
    }
    console.log(nextsmaller,"next");
    console.log(stack,"stack")
    // while (stack.length != 0) {
    //     nextsmaller[stack[stack.length - 1]] = n - 1;
    //     stack.pop();
    // }


    let prevsmaller = new Array(n).fill(-1);
    stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length != 0 && array[stack[stack.length - 1]] >= array[i]) {
            prevsmaller[stack[stack.length - 1]] = i;
            stack.pop();
        }
        stack.push(i);
    }
    // while (stack.length != 0) {
    //     prevsmaller[stack[stack.length - 1]] = 0;
    //     stack.pop();
    // }

    console.log(nextsmaller,"next");
    console.log(prevsmaller,"prev")
    let max = Number.MIN_SAFE_INTEGER;;
    for (let i = 0; i < n; i++) {
        // let curr = 0;
        // let curr = (i-prevsmaller[i]) + (nextsmaller[i]-i)  ;  // next - prev + 1
        let curr = nextsmaller[i]- prevsmaller[i] -1 
        max = Math.max(max, curr*array[i]);
    }
    console.log(max,"max")
    return max;
}


let arr = [2, 1, 5, 6, 2, 3];
// let arr = [1];


largestRectangleArea(arr);