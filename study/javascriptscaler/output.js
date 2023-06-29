function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
const member = new Person('Lydia', 'Hallie');
Person.getFullName = function () {

    return `${this.firstName} ${this.lastName}`;

};
console.log(member.getFullName());


//    o/p : Syntax error



function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');
console.log(lydia);
console.log(sarah);


// Person {firstName: "Lydia", lastName: "Hallie"} and undefined


const shape = {
    radius: 10,
    diameter() {
    return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
   };
   
   console.log(shape.diameter());
   console.log(shape.perimeter());

   //20 NaN as arrow doesnt bind withits lexical scope