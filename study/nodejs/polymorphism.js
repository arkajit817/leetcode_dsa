class Animal{
    constructor(name){
        this.name = name;
    }
    makesound(){
        console.log('generiv sound');
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    makesound(){
        super.makesound();
        console.log('woof woof');
    }
}

let d1 = new Dog('harry');
d1.makesound();