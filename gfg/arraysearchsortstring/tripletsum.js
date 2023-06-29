let find3Numbers = function (A, n, X) {
    //your code here
    let a = A;
    a.sort((a, b) => a - b);
    console.log(a, "a")
    let i = 0;
    while (i <= n - 2) {
        let j = i + 1;
        let k = n - 1;
        while (j <= n - 2 && k>j) {
            let sum = a[i] + a[j] + a[k];
            if (sum === X) {
                console.log(a[i], a[j], a[k]);
                return 1;
            }
            if (sum > X) {
                k--;
            } else {
                j++;
            }

        }
        i++;

    }
    return 0;

}
let array = [589, 343, 609, 61, 222, 759, 955, 89, 147, 691, 950, 844, 431, 621, 749, 68, 537, 784, 36, 227, 186, 39, 854, 630, 225, 749, 924, 360, 258, 767, 945, 956, 319, 727, 412, 26, 356, 2, 550, 497, 585, 516, 965, 343, 76, 914, 143, 197, 949, 73]
console.log(find3Numbers(array, 50, 182))