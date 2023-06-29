var preorderTraversal = function(root) {
    let st = [];
    let res = [];
    if(!root) return [];
    st.push(root);
    while(st.length !==0 ){
       let p = st.pop();
        res.push(p.val);
        if(p.right !==null) st.push(p.right);
        if(p.left !==null) st.push(p.left);
    }
    console.log(res,"res")
    return res;
};