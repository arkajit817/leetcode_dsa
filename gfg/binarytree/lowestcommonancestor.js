var lowestCommonAncestor = function(root, n1, n2) {
    if(root == null) return null;
        if(root == n1 || root ==n2){
            return root;
        }
        let left = lowestCommonAncestor(root.left,n1,n2);
        let right = lowestCommonAncestor(root.right,n1,n2);
        if(left !=null && right !=null){
            return root;
        }
        
        return (left != null) ? left : right; 
};