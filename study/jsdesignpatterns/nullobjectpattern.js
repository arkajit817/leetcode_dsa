//before
class User{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    hasAccess(){
        return this.name = 'bob';
    }
}

class NullUser{
    constructor(id,name){
        this.id = -1;
        this.name = 'guest';
    }
    hasAccess(){
        return false;
    }
}



const users = [
    new User(1,'bob'),
    new User(2,'john')
];

function getUser(id){
    const user=  users.find(user=> user.id == id);
    if(user == null){
        return new NullUser()
    } else {
        return user;
    }
}


//after
function printuser(id){
    const user = getUser(id);
    
    let name = 'guest';
    
    console.log('hello',user.name);
    if( user.hasAccess()){
        'you have access';
    } else {
        console.log('you are not allowed')
    }

}


