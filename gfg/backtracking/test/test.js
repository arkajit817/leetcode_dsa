
const arrayOfObjects = [{ key: 'FAQ1', value: "q1" },
 { key: 'FAQA1', value: "a1" },
  { key: 'FAQ5', value: "q5" }, 
  { key: 'FAQ2', value: "q2" }, 
  { key: 'FAQA7', value: "a7" },
   { key: 'FAQA6', value: "a6" }, 
   { key: 'FAQA3', value: "a3" },
    { key: 'FAQ4', value: "q4" },
     { key: 'FAQA2', value: "a2" },
      { key: 'FAQA5', value: "a5" }, 
      { key: 'FAQ7', value: "q7" },
       { key: 'FAQ6', value: "q6" },
        { key: 'FAQ3', value: "q3" },
        {key : 'FAQA4',value : "a4"}
    ];

// write a javascript code to sort and
//  return above array like this = 
// [{key: 'q1', value :"a1"}, {key: 'q2, value :"a2"}, {key: 'q3', value :"a3"}]
let answers = [];
arrayOfObjects.sort((a,b)=> a.key.localeCompare(b.key));
console.log(arrayOfObjects);

let k = Math.floor(arrayOfObjects.length/2);
for(let i=0;i < Math.floor(arrayOfObjects.length/2);i++){
    let obj = {};
    obj.key = arrayOfObjects[i].value;
    obj.value = arrayOfObjects[i+k].value;
    answers.push(obj);
}
console.log(answers);