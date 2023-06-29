function connect(p)
    {
        //your code here
        let st = [];
        st.push(p);
        let temp = null;
        while(st.length !=0){
            let l = st.length;
            for(let i=0;i < l;i++){
                let prev = temp;
                temp = st.shift();
                if(i>0){
                prev.nextRight = temp;
                }
                if(temp.left !=null) st.push(temp.left);
                if(temp.right !=null) st.push(temp.right);
            }
            temp.nextRight = null;
            }
        // return temp;
    }


    // Accolite Adobe Amazon Boomerang Commerce Flipkart Google Microsoft Ola Cabs Oracle OYO Rooms Xome
//vvi