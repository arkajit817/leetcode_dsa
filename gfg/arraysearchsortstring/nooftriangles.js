function findNumberOfTriangles(array, n)
    {
        //your code here
        let arr = array.sort((a,b)=>{return (a-b)});
        console.log(arr,"arr")
        let count =0;
        for(let i=n-1;i>=2;i--){
            console.log(i,"i")
            let l = 0;
            let r =i-1;
            while(l<r){
                console.log(l,"-",r);
                if(arr[l]+arr[r]> arr[i]){
                    count += r-l;
                    r--;
                } else {
                    l++;
                }
            }
        }
        console.log(count);
        return count;
    }


findNumberOfTriangles([26,9 ,27, 22, 16, 27],6)