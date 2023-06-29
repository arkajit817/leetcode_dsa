
let name = {
    "firstname": "arkajit",
    "lastname" : "choudhury"
}

function printname(city,state){
    console.log(this.firstname + " " + this.lastname  + city , state);
}

printname.apply(name,["agartala"]);

let printmyname = printname.bind(name,"agartala");
printmyname("tripura")