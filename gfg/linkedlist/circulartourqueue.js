function tour(p, n)
    {
        //your code here
        // console.log(p,"p")
        let start =0;
        let oil = 0;
        let shortage = 0;
        for(let i=0;i < n;i++){
            oil += p[i].petrol - p[i].distance;
            if(oil < 0){
                start = i+1;
                shortage += oil;
                oil =0;
            }
        }
        if(oil + shortage >=0 ){
            return start;
        } else {
            return -1;
        }
    }


    //petrol pump
    // / Amazon FactSet Microsoft Morgan Stanley Zoho Google