function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(){
    console.log(this.name+ "is walking");
}

function Student(name,age,rollno){
    Person.call(this,name,age);
    this.rollno = rollno;
}

Student.prototype = new Person();// we are having prototype chaining over here
Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function(){
    console.log(this.name + "is studying");
}

var firstname = new Student('john',20,1);
console.log(firstname);

//in Es6 we can directly
class Student extends Person {
    constructor(name, studentId) {
      super(name);
      this.studentId = studentId;
    }
  }