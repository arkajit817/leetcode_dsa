function arrayIsEqual(a, b) {
    if(Array.isArray(a) ||
    Array.isArray(b) ||
    a.length === b.length){
        return false;
    }
    
    for(let i=0;i < a.length;i++){
        // let exists = b.includes(a[i]);
        if(Array.isArray(a[i])){
            
        }
        if(exists && typeof(a[i]) == typeof(exists)){

        }
    }
    // a.every((val, index) => {
    // 	if(val === b[index])
    // });
}

