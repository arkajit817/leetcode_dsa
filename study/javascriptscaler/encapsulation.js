class Student {  
    constructor(id, name, marks){  
        let _id = id;
        let _name = name;
        let _marks = marks  
        this.getId = () => _id;  
        this.getName = () => _name;
        this.getMarks = ()=> _marks;
        this.setMarks = (marks)=>{
            _marks = marks
        }
    }   
}
let s = new Student(1,"harsh", 85)
s.getId() //1
s.getName() //harsh
s.setMarks(90)
s.getMarks() //90