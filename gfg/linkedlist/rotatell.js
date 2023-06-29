rotate(head, k)
    {
        //your code here
        let count =1;
        let curr = head;
        if(head ==null) return head;
        while(count < k && curr !==null){
            curr = curr.next;
            count++;
        }
        let kth = curr;
        while(curr.next !==null){
            curr = curr.next;
        }
        curr.next = head;
        let res = kth.next;
        kth.next = null;
        return res;
    }