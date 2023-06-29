function inOrderSuccessor(root,x){
    //code here
    if(x.right !=null){
        return this.getmin(x.right);
    }
    let succ = null;
    while(root !=null){
        if(x.data < root.data){
            succ = root;
            root = root.left;
        } else if(x.data > root.data){
            root = root.right;
        } else {
            break;
        }
    }
    return succ;
}

function getmin(root){
    while(root.left !=null){
    root = root.left;
    }
    return root;
}