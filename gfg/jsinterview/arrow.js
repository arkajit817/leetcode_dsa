 this.age = 26;
 let user = { 

 name: "GFG", 

 gfg1:() => { 

 console.log("hello "   + this.name, this.age); // no 'this' binding here 

 }, 

 gfg2(){ 

 console.log("Welcome to "   + this.name); // 'this' binding works here 

 } 

 }; 

 user.gfg1(); 

 user.gfg2(); 

 //new 
 function normal(){
     console.log(arguments);
 }

 new normal(1,2,3)

 let x =(arguments)=>{
     console.log(arguments);
 }
 x(1,2,3)
 //new x(1,2,3)