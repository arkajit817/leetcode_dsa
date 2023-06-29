let coins = [1, 2, 5];
let n = 3;
let v = 6;

function mincoins(coins, n, v) {
    if (v == 0) return 0;
    let res = Number.MAX_VALUE;
    for (let i = 0; i < n; i++) {
        if (coins[i] <= v) {
            let subres = mincoins(coins, n, v - coins[i]);
            if (subres + 1 != Number.MAX_VALUE && subres + 1 < res) {
                res = subres + 1;
            }
        }
    }
    return res;
}
console.log(mincoins(coins, n, v));

//exponential