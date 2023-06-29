    //Function to sort an array according to the other array.
    function sortA1ByA2(a1, m, a2, n){
        // code here
        let obj = {};
        for(let i=0; i< m;i++){
            if(obj[a1[i]]){
                obj[a1[i]] = obj[a1[i]]+1;
            } else {
                obj[a1[i]] = 1;
            }
        }
        
        let index = 0;
        for(let i=0;i < n;i++){
            if(obj[a2[i]]){
                 while(obj[a2[i]] !==0){
                     a1[index++] = a2[i];
                     obj[a2[i]] = obj[a2[i]]-1;
                 }
            }
        }
        
        for(let key in obj){
            // console.log(obj[key],"key",key);        // let unsorted = [];

            if(obj[key] ==0){
                continue;
            } else {
                while(obj[key] !==0){
                    a1[index++] = key;
                    obj[key] = obj[key]-1;
                }
            }
            
        }
        // console.log(a1);
        return a1;
    }
// Amazon Microsoft