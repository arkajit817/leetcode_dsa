let myObj = {
  name: "pramod", // string
  age: 36, // int
  languages: ["eng", "kan", "hin"], // array
  education: {
    // obj
    10: "95%",
    12: "86%",
  },
  address: {
    state: {
      city: "noida",
      pincode: 201301,
    },
  },
};

function getDetails(obj,str){
    let nest = str.split(".");
    let curr = 0;
    // let res = obj[nest[curr]];
    let res = obj;
    let len = nest.length;
    while(curr< len){
        res = res[nest[curr]];
        curr++;
    }
    // console.log(res,"res")
    return res;
  
}

console.log(getDetails(myObj,"address.state.city"))
