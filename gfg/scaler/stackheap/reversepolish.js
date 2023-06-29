function evalRPN(array) {
    let stack = [];
    let exp = ["+", "-", "*", "/"];
    for (let i = 0; i < array.length; i++) {
        if (!exp.includes(array[i])) {
            stack.push(array[i]);
            // continue;
        }
        if (array[i] == "+") {
            let val = 0;
            val += parseInt(stack[stack.length - 2]) + parseInt(stack[stack.length - 1]);
            // stack.pop();
            stack.pop();
            stack.pop();
            stack.push(val);
        }
        if (array[i] == "-") {
            let val = parseInt(stack[stack.length - 2]) - parseInt(stack[stack.length - 1]);
            stack.pop();
            stack.pop();
            stack.push(val);
        }
        if (array[i] == "*") {
            let val = 1;
            val *= parseInt(stack[stack.length - 2]) * parseInt(stack[stack.length - 1]);
            stack.pop();
            stack.pop();
            stack.push(val);
        }
        if (array[i] == "/") {
            let val = parseInt(stack[stack.length - 2]) / parseInt(stack[stack.length - 1]);
            stack.pop();
            stack.pop();
            stack.push(val);
        }
       
        // stack.push(val);
        // console.log(stack,"stack")

    }
    // console.log(stack,"stack")
    return stack.length > 0 ? stack[0] : -1;
}



let arr = ["5", "1", "2", "+", "4", "*", "+", "3", "-"]
// let arr = ["2","2","/"];

console.log(evalRPN(arr));