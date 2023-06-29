kthsmallest: function (array, k) {
    for(let i=0 ; i < k;i++){
        let min_idx = i;
        for(let j = i ; j < array.length;j++){
            if(array[j]<= array[min_idx]){
                min_idx = j;
            }
        }
        [array[i],array[min_idx]]= [array[min_idx],array[i]];
    }
    return array[k-1];
}

//selection sort


// ABCO
// Accolite
// Amazon
// Cisco
// Microsoft
// Rockstand
// SAP Labs
// Snapdeal
// VMWare
