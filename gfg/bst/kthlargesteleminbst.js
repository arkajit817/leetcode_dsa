constructor(){
    this.c = 0;
    this.res = null;
}
  kthLargest(root,k){
      //code here
      this.util(root,k);
      return this.res.data;
      
  }
  
  util(root,k){
      if(root == null || this.c >=k) return;
      this.util(root.right,k);
      this.c++;
      if(this.c ==k) this.res = root;
    


      //practice
      //vvi