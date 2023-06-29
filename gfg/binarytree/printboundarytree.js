class Solution {
    constructor(){
        this.arr = [];
    }
  	printBoundary(root){
  		//code here
  		this.printleft(root);
  		this.printleaf(root);
  		this.printright(root.right);
  		return this.arr;
  		
  	}
  	
  	printleft(root){
  	    if(root ==null) return;
  	     if(root.left){
  	            this.arr.push(root.key);
  	            this.printleft(root.left);
  	       }
  	      else if(root.right){
  	           this.arr.push(root.key);
  	            this.printleft(root.right);
  	       }
  	    }
  	
  	
  	
  	printright(root){
  	    if(root ==null) return;
  	     if(root.right){
  	            this.printright(root.right);
  	            this.arr.push(root.key);
  	       }
  	      else if(root.left){
  	            this.printright(root.left);
  	            this.arr.push(root.key);

  	       }
  	    }
  	    
  	printleaf(root){
  	    if(root == null) return null;
  	    this.printleaf(root.left);
  	    if(root.left == null && root.right == null) {
  	        this.arr.push(root.key);
  	    }
  	    this.printleaf(root.right);
  	}    
  	    
  	    
  	
}

//vvi
//unsolved //gfg
// Accolite Amazon FactSet Hike Kritikal Solutions Microsoft Morgan Stanley OYO Rooms Payu Samsung Snapdeal