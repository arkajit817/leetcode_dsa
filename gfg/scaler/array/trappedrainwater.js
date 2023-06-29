//https://leetcode.com/problems/trapping-rain-water

//leetcode 42

function trap(array) {
    let n = array.length;
    let prefix = Array(n).fill(0);
    let suffix = Array(n).fill(0);

    let prevpre = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        prevpre = Math.max(prevpre, array[i]);
        prefix[i] = prevpre;
    }
    let prevsuff = Number.MIN_SAFE_INTEGER;
    for (let i = n - 1; i >= 0; i--) {
        prevsuff = Math.max(prevsuff, array[i]);
        suffix[i] = prevsuff;
    }
    let res = 0;
    for (let i = 1; i < n - 1; i++) {
        res += Math.min(prefix[i], suffix[i]) - array[i];
    }
    return res;
}


TC: O(n)
SC: O(n)

//optimised


function trapanother(array) {
    let n = array.length;
    let maxleft = 0;
    let maxright = 0;
    let l = 0;
    let r = n - 1;
    let res = 0;
    while (l <= r) {
        if (array[l] <= array[r]) {
            if (array[l] >= maxleft) {
                maxleft = array[l];
            } else {
                res += maxleft - array[l];
            }
            l++;
        } else {
            if (array[r] >= maxright) {
                maxright = array[r];
            } else {
                res += maxright - array[r];
            }
            r--;
        }
    }
    return res;
}
SC : O(1)

// Accolite
// Adobe
// Amazon
// D-E-Shaw
// MakeMyTrip
// Microsoft
// Payu
// Arrays
// DSA