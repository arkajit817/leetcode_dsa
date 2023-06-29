class Node{
    constructor(){
          this.data =0;
          this.next = null;
    }
}

   
   function mergeSort(h)
    {
        //your code here
        if(h == null || h.next == null){
            return h;
            
        }
        let mid =   getmiddle(h);
        let midnext = mid.next;
        mid.next = null;
        let left =   mergeSort(h);
        let right =   mergeSort(midnext);
        let merged =   mergeSorted(left,right);
        return merged;
        
    }
    function mergeSorted(h1,h2){
        if(h1 ==null){
            return h2;
        }
        if(h2 ==null){
            return h1;
        }
        if(h1.data < h2.data){
            h1.next =   mergeSorted(h1.next,h2);
            return h1;
        }else {
            h2.next =   mergeSorted(h1,h2.next);
            return h2;
        }
    }
    
    function getmiddle(h){
        if(h ==null) return h;
        let slow = h;
        let fast = h;
        while(fast.next !==null && fast.next.next !==null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    
    function newNode(key){
        let temp = new Node();
        temp.data = key;
        temp.next = null;
        return temp;
    
    }


head1 = newNode(1);
head1.next = newNode(5);
head1.next.next =  newNode(3);
console.log(mergeSort(head1));


// Accolite Adobe Amazon MAQ Software Microsoft Paytm Veritas