function car(color,model,company){
    this.color = color;
    this.model = model;
    this.company= company;
    this.drive = function (){
        console.log(`i am driving , ${this.company}`);
    }
}


let car1 = new car('red','r8','audi');

car1.drive();