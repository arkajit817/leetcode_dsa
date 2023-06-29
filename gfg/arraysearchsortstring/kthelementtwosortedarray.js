let array1 = [2, 3, 6, 7, 9];
let array2 = [1, 4, 8, 10];
let k = 5;
let m = array1.length;
let n = array2.length;
let d = 0;
let i = 0;
let j = 0;

while(i < m && j< n){
    if(array1[i]< array2[j]){
        d++;
        if(d== k){
            return array1[i];
        }
        i++;
    }
    if(array1[i] > array2[j]){
        d++;
        if(d==k){
            return array2[j];
        }
        j++;
    }
    
    
}
while(i< m){
    d++;
    if(d == k){
        return array1[i];
    }
    i++;
}
while(j < n){
    d++;
    if(d== k){
        return array2[j];
    }
    j++;    
}
