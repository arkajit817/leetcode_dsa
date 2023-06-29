function zigZagTraversal(root)
{
    //your code here
    let s1 = [];
    let s2 = [];
    let res = [];
    s1.push(root);
    while(s1.length !=0 || s2.length !=0){
        while(s1.length !=0){
            let first = s1.pop();
            res.push(first.data);
            if(first.left !=null) s2.push(first.left);
            if(first.right !=null) s2.push(first.right);
        }
        while(s2.length !=0){
            let first = s2.pop();
            res.push(first.data);
            if(first.right !=null) s1.push(first.right);
            if(first.left !=null) s1.push(first.left);
        }
    }
    return res;
    
}