let prev = null;
let curr = head;
let next = null;

while(curr !=null){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
}

//program to reverse in a group

function reverse(head,k){
    let count =0;
    while(head & count <k)
    // ...
    count++;
    curr.next = reverse(head,k);
}

while()