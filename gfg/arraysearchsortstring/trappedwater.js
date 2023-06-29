let array = [4, 2, 0, 6, 2, 3, 5];
let n = array.length;
if (n <= 2) {

}

let maxLeft = array[0];
let maxRight = array[n - 1];
let l = 1;
let r = n - 2;
let trapped = 0;

while (l <= r) {
    if (maxLeft <= maxRight) {
        if (array[l] >= maxLeft) {
            maxLeft = array[l];
        }
        else {
            trapped += maxLeft - array[l];
        }
        l++;
    } else {
        if(array[r]>= maxRight){
            maxRight = array[r];
        } else {
            trapped += maxRight- array[r];
        }
        r--;
    }
}

console.log(trapped);