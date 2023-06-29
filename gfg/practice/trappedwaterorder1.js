let array = [4, 2, 0, 6, 2, 3, 5];
let n = array.length;

let maxLeft = array[0];
let maxRight = array[n-1];
let l=1;let r = n-2;
let tapped = 0;
while(l <= r){
    if(maxLeft <= maxRight){
        if(array[l]>= maxLeft){
            maxLeft = array[l];
        } else {
            tapped += maxLeft-array[l];
        }
        l++;
    } else {
        if(array[r]>= maxRight){
            maxRight = array[r];
        } else {
            tapped += maxRight - array[r];
        }
        r--;
    }
}
console.log(tapped,"tapped");

// Amazon Microsoft Google