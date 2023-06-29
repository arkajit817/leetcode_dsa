class Person{
    constructor(){
        this.name = name;
        this.age = age;
    }
    welcome = function(){
        console.log('-welcome', this.name)
    }
    
   
}

class Teacher extends Person{
    constructor(name,age, strength){
        super(name,age);
        this.strength = strength;
    }
    test = function(){
        super.welcome(); // method interitance
    }
    
   
}



let t1 = new Teacher('arka',29, 50);

t1.test();