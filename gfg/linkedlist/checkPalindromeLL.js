isPalindrome(head)
    {
        //your code here
        let slow = head;
        let fast = head;
        while(fast !==null && fast.next !==null){
            slow = slow.next;
            fast = fast.next.next;
        }
        let prev = null;
        let curr = slow;
        let next = null;
        while(curr != null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        // let isPal = true;
        while(prev != null){
            if(prev.data !== head.data){
                return false;
            }
            prev = prev.next;
            head = head.next;
        }
        return true;
    }