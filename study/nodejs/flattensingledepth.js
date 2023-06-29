
// Declare an object
let obj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91-999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};


let flatten = (obj)=>{
    let res = {};
    for(const key in obj){
        if(typeof(obj) == 'object' && !Array.isArray(obj)){
            flatten(obj[key]);
        } else {
            res[]
        }
    }
}