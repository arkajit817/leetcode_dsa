function balance(n){
    print("",n,0,0)
}

function print(str,n,open,close){
    if(close ==n){
        console.log(str);
        return;
    }
    if(open> close){
        str +="}";
        print(str,n,open,close+1);
    }
    if(open< n){
        str += "{";
        print(str,n,open+1,close);
    }
}

balance(2);

// Adobe Amazon Google Microsoft Walmart