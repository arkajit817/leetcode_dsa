class Node{
    constructor(){
        this.data =0;
        this.next = null;
    }
}

function newNode(key){
    temp = new Node();
    temp.data = key;
    temp.next = null;
    return temp;

}

function printList(node){
    while(node !=null){
        console.log(node.data);
        node = node.next;
    }
}

function merge(h1,h2){
    if(h1 == null){
        return h2;
    }
    if(h2== null){
        return h1;
    }
    let head = new newNode();
    if(h1.data < h2.data){
        head = h1;
        h1 = h1.next;
    } else {
        head = h2;
        h2 = h2.next;
    }
    let current = head;
    while(h1!=null || h2 !==null){
        if(h1 == null){
            current.next = h2;
            return head;
        }
        if(h2 == null){
            current.next = h1;
            return head;
        }
        if(h1.data < h2.data){
            current.next = h1;
            current = current.next;
            
            h1 = h1.next;
        }else {
            current.next = h2;
            current = current.next;
            h2 = h2.next;
        }
    }
    current.next = null;
    return head;
}



head1 = newNode(1);
head1.next = newNode(3);
head1.next.next =  newNode(5);

head2 = newNode(0);
head2.next = newNode(2);
head2.next.next = newNode(4);

let merged = merge(head1,head2);
console.log(printList(merged));