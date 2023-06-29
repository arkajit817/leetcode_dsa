function nextLargerElement(arr, n)
    {
        // code here
        let res = Array(n).fill(-1);
        console.log(res);
        let s = [];
        s.push(0);
        for(let i=1; i < n;i++){
            let topp = s[s.length-1];
            console.log(topp,i,"yopp")
            if(arr[i] <= arr[topp]){
                console.log("kk")
                s.push(i);
            } else {
                while(arr[i]>= arr[s[s.length-1]]){
                    res[s[s.length-1]]= arr[i]; 
                    s.pop();
                }
                s.push(i);
            }
        }
        return res;
    }

    console.log(nextLargerElement([1 ,3, 2 ,4],4))

    //vvi
    // Flipkart Amazon Microsoft