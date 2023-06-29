intersectPoint(head1, head2)
    {
        //your code here
        let p = head1;
        let q = head2;
        if( head1 == null || head2 ==null){
            return null;
        }
        while(p !=q){
            if(p == null){
                p = head2;
            }else {
                p = p.next;
            }
            if(q == null){
                q = head1;
            } else {https://www.youtube.com/watch?v=IpBfg9d4dmQ
                q = q.next;
            }
        }
        return p.data;

    }


    //suppose it doesnt have intersection point still it will give null as the response.
    //https://www.youtube.com/watch?v=IpBfg9d4dmQ