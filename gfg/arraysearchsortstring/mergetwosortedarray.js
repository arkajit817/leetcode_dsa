//https://www.youtube.com/watch?v=NWMcj5QFW74

let arr1 = [1, 7, 10, 21, 30, 50, 60];
let arr2 = [2, 6, 12, 17, 34];
let m = arr1.length;
let n = arr2.length;
// let last = arr1[m-1];

for (let j = n - 1; j >= 0; j--) {
    let i;let last = arr1[m-1];
    for (i = m - 2; i >= 0 && arr1[i] > arr2[j]; i--) {
        arr1[i + 1] = arr1[i]
    }
    if (i !== m - 2 || last > arr2[j]) {
        console.log("inside")
        arr1[i + 1] = arr2[j];
        console.log(last, "last")
        arr2[j] = last;
    }
}

console.log(arr1, "--", arr2);

//line 14 condition example 
//1 2 8
//2 6 
//Here when i=m-2 (2) is less than 6 but last is greater than 6 so swap. If i!m-2 teh direct swap