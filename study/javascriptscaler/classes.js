class Person{
    constructor(){
        this.name = name;
        this.age = age;
    }
    
    welcome = function (){
        console.log(`welcome , ${this.name}`);
    }
}


let p1 = new Person('arka',29);

p1.welcome();