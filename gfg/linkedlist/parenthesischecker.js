ispar(x)
    {
        //your code here
        let stack = [];
        for(let i=0;i < x.length;i++){
            if(x[i] == "(" || x[i] == "{" || x[i] == "["){
                stack.push(x[i]);
            }
            else if((x[i] == ")" && stack[stack.length-1] =="(") ||
                (x[i] == "}" && stack[stack.length-1] =="{")||
                (x[i] == "]" && stack[stack.length-1] =="[") ) {
                    // console.log(stack,"st")
                    stack.pop();
                } else {
                    return false;
                }
        }
        if(stack.length==0) return true;
        return false;
    }