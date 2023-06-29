reverse(node, k)
{
    //your code here
    if(node == null) return node;
    let prev = null;
    let curr = node;
    let next = null;
    let count =0;
    while(count < k && curr !==null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }
    if(next !==null){
        node.next = this.reverse(next,k);
    }
    return prev;
}

// Reverse a Linked List in groups of given size. 