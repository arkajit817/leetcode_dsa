// Given an array of positive integers A, two integers appear only once, and all the other integers appear twice.
// Find the two integers that appear only once.

// Note: Return the two numbers in ascending order.

//google

function solve(array) {
    let n = array.length;
    let x = 0;
    for (let i = 0; i < n; i++) {
        x = x ^ array[i];
    }

    //x is the xor of all the elements
    let pos = 0;
    for (let i = 0; i < 32; i++) {
        if (x & (1 << i)) {
            pos = i;
            break;
        }
    }
    let xor1 = 0; // one group where ith bit is set
    let xor2 = 0; // one group where ith bit is unset
    for (let i = 0; i < n; i++) {
        if (array[i] & (1 << pos)) {
            xor1 = xor1 ^ array[i];
        } else {
            xor2 = xor2 ^ array[i];
        }
    }
    return [xor1, xor2].sort((a, b) => a - b);
}


//important concept