function isSymmetric(root){
    //code here
    if(root ==null) return true;
    return this.isSym(root.left,root.right);
}

function isSym(r1,r2){
    if(r1 ==null && r2 ==null) return true;
    if(r1 == null || r2 ==null) return false;
    if(r1.key == r2.key){
        if(this.isSym(r1.left,r2.right) && this.isSym(r1.right,r2.left)){
        return true;
    }
    }
    else {
        return false;
    }
    }