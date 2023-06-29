let stack = [];
let top = -1;

function push(e) {
    top++;
    stack[top] = e;
}

function pop() {
    if (top == -1) return 0;
    else {
        let popped_elem = stack[top];
        top--;
        return popped_elem;
    }
}

function operator(e) {
    if (e == "+" || e == "-" || e == "*" || e == "/" || e == "(" || e == ")") {
        return true;
    } else {
        return false;
    }
}

function precedency(pre) {
    if (pre == "(" || pre == ")") return 1;
    if (pre == "+" || pre == "-") return 2;
    if (pre == "/" || pre == "*") return 3;
    if (pre == "^") return 4;
    else {
        return 0;
    }
}


function infixtoprefix(s) {
    let postfix = [];
    let temp = 0;
    for (let i = 0; i < s.length; i++) {
        let el = s[i];
        if (operator(el)) {
            if (el == ")") {
                while (stack[top] !== "(") {
                    postfix[temp++] = pop();
                }
                pop(); //removes the (
            } else if (el == "(") {
                push(el);
            } else if(precedency[el] > precedency[stack[top]]){
                push(el);
            }else {
                while(precedency[el] <= precedency[stack[top]] && top >-1){
                    postfix[temp++] = pop();
                }
                push(el);
            }

        } else {
            postfix[temp++] = el;
        }
    }
    // while(top > -1){
    //     postfix[temp++] = stack[top--];
    // }
    console.log(postfix.join(""));
}

infixtoprefix("a+b*(c^d-e)^(f+g*h)-i");