var trimBST = function(root, l, r) {
    if(root == null) return null;
  		root.left= trimBST(root.left,l,r);
  		root.right = trimBST(root.right,l,r);
  		if(root.val < l){
  		    let rchild = root.right;
  		    return rchild;
  		} 
  		if(root.val > r){
  		     let lchild = root.left;
  		     return lchild;
  		}
  		return root;
};