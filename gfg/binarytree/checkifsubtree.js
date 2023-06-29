isSubTree(t, s)
{
    //your code here
   let pre = [];
   this.pre(t);
//   console.log(this.prearray,"yy");
   this.presub(s);
//   console.log(this.prearraysub,"yy");
    this.inorder(t);
    this.inordersub(s);
//   console.log(this.str1,"..",this.str2,",,",this.str3,"ll",this.str4)
  if(this.str1.includes(this.str2) && this.str3.includes(this.str4)){
              return 1;
  } else {
      return 0;
  }
   
}

pre(root){
    if(root == null) {
        this.str1 +="$";
        return ;
        };
    this.str1 +=root.data;
    this.pre(root.left);
    this.pre(root.right);
}
presub(root){
    if(root == null) {
        this.str2 +="$";
        return ;
        };
    this.str2 +=root.data;
    this.presub(root.left);
    this.presub(root.right);
}
inorder(root){
    if(root == null) {
        this.str3+= "$";
        return ;
        };
    this.inorder(root.left);
    this.str3 +=root.data;
    this.inorder(root.right);
}
inordersub(root){
    if(root == null) {
        this.str4 +="$";
        return ;
        };
    this.inordersub(root.left);
    this.str4+=root.data;
    this.inordersub(root.right);
}