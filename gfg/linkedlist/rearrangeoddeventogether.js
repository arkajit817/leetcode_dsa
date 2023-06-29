rearrangeEvenOdd(node)
    {
        //your code here
        let oddstart =null;
        let oddend = null;
        let evenstart = null;
        let evenend = null;
        let curr = node;
        while(curr !==null){
            if(curr.data %2==0){
                if(evenstart == null){
                    evenstart = curr;
                    evenend = evenstart;
                } else {
                    evenend.next = curr;
                    evenend = evenend.next;
                }
            } else {
                if(oddstart ==null){
                    oddstart = curr;
                    oddend = oddstart;
                } else {
                    oddend.next = curr;
                    oddend = oddend.next;
                }
            }
            curr = curr.next;
        }
        if(oddstart ==null || evenstart ==null){
            return;
        }
        oddend.next = evenstart;
        evenend.next = null;
        node = oddstart;
        // return oddstart;
        
    }