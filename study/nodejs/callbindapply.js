let name  = {
    "firstname": "arkajit",
    "lastname": "choudhury"

};

let name1 = {
    "firstname": "abc",
    "lastname": "xyz"
}

let printname = function (hometown,state){
    console.log(this.firstname + " " + this.lastname+ "is from "+ hometown + ", "+ state);
}

//in call first agr is the this & other are args
printname.call(name,"agartala","tripura");

//only diff between call & apply is agrms 
//in apply we will pass the args in array

printname.apply(name,["agartala","tripura"])


//if we use bind it gives us a copy which we can invoke later
// e.g

let printmyname = printname.bind(name,"agartala","tripura");
console.log(printmyname); //function
printmyname();// arkajit choudhuryis from agartala, tripura