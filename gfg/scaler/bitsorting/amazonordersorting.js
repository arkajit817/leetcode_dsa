function comp1(arr1, arr2) {
    let m1 = arr1[1];
    let m2 = arr2[1];
    let alpha1 = arr1[0];
    let alpha2 = arr2[0];
    if(m1.localeCompare(m2) == 0){
        return alpha1.localeCompare(alpha2); 
    } else {
        return m1.localeCompare(m2);
    }
 
   
}

function mysort(arr){
    let prime = [];
    let nonprime = [];
    console.log(arr)
    for(let i=0; i < arr.length;i++){
        console.log(arr[i][1]);
        let m = arr[i][1];
        if(/^[a-z]+$/.test(m)){
            prime.push(arr[i]);
        } else{
            nonprime.push(arr[i]);
        }
    }

    prime.sort(comp1);
    return [...prime,...nonprime];
    // console.log(prime,"prime");



}



// sort((a,b)=> a-b)

function isPrime(str) {
    if (/[^a-z]+$/.test(str)) {
        return true;
    } else {
        return false;
    }
}



// let arr = [["a1", "aab"], ["bh6", "675"], ["b5d", "12"], ["1a", "aab"]];
let arr = [['p','vuk'],['86','552'],['q','guivp'],['2','ze']];
console.log(mysort(arr));



// Order Prioritization Algorithm
//amazon

// Amazon is working on a order prioritization algorithm. Some orders which are from prime customers have a higher priority over others. All orders have two strings associated with. The first string gives the unique alphanumeric id of the order. The second string gives the metadata associated with that order. There are N orders currently pending given by the string 2D array A of size N*2.
// The metadata of prime order consists only of lower case english characters whereas the metadata of non-prime order consists only of positive integers

// The priority of the orders must be sorted according to the following :-
// Prime orders must be delivered first, sorted by lexicographic sort of the alphabetic metadata.
// In case of ties, the alphanumeric id should be used as a backup sort
// The remaining non-primes order must all come after, in the order they were given in the input
// Return the priority order in which the orders must be fulfilled

// A = [["a1" , "aab"] , ["bh6" , "675"] , ["b5d" , "12"] , ["1a" , "aab"]