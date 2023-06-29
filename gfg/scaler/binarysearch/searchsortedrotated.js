//leetcode 33
//33. Search in Rotated Sorted Array
// Adobe
// Amazon
// BankBazaar
// D-E-Shaw
// FactSet
// Flipkart
// Hike
// MakeMyTrip
// Microsoft
// Paytm
// Samsung
// SAP Labs
// Snapdeal
// Times Internet

var search = function (array, ele) {
    let l = 0;
    let r = array.length - 1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (array[mid] == ele) return mid;
        if(array[mid >= array[l]]){
            if(array[l]<= ele && array[mid]>= ele){
                r = mid -1;
            } else {
                l = mid +1 ;
            }
        } else {
            if(array[mid]<= ele && array[r] >= ele){
                l = mid +1;
            } else {
                r = mid -1
            }
        }
    }
    return -1;
};