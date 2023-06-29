function solve(array, k, total) {
    let n = array.length;
    if (k > array.length) return 0;
    let sum = 0;
    for (let l = 0; l < k; l++) {
        sum += parseInt(array[l]);
    }
    if (sum == total) return 1;
    let i = 0;
    let j = k;
    while (j < n) {
        sum -= parseInt(array[i]);
        sum += parseInt(array[j]);
        if (sum == total) return 1;
        j++;
        i++;
    }
    return 0;


};

console.log(solve([6, 3, 3, 6, 7, 8, 7, 3, 7], 2, 10))