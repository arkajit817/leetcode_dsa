var inorderTraversal = function(root) {
    let st = [];
    	let res =[];
    	while(root!=null || st.length !=0){
    	    while(root !=null){
    	        st.push(root);
    	        root = root.left;
    	    }
    	    
    	    root = st.pop();
    	   // console.log(root.key);
    	   res.push(root.val);
    	    root = root.right;
    	}
    	return res;
};