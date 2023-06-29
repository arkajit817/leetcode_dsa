function verticalOrder(root)
    {
        //your code here
        let obj = {};
        let q = [];
        q.push([0,root]);
        while(q.length !=0){
            let ele = q.shift();
            // console.log(ele,"ele")
            if(!obj.hasOwnProperty(ele[0])){
                // console.log(ele[0],ele[1],"lll")
                obj[Number(ele[0])] =[ele[1].data];
                // obj[ele[0]] ="oo";
            } else {
                obj[Number(ele[0])].push(ele[1].data);
                // obj[ele[0]].push("ll");
            }
            if(ele[1].left !=null) q.push([ele[0]-1,ele[1].left]);
            if(ele[1].right !=null) q.push([ele[0]+1,ele[1].right]);
        }
        // console.log(obj);
        let arr = Object.keys(obj);
        arr.sort((a,b)=> Number(a)-Number(b));
        let res = [];
        for(let i=0;i < arr.length;i++){
            res.push(...obj[arr[i]]);
        }
        // console.log(res,"arr")
        return res;

    }


//if we use dfs or bfs recursively,it'll not maintain the level order along with vertical order
//to maintain level,we need to push in queue & pop the first element
    // Accolite Amazon BrowserStack Dell Flipkart Grofers MakeMyTrip Netskope Walmart Microsoft
//vvi