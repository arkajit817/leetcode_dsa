let arr = [{name:'c',salary:34000,age:25},
{name:'a',salary:20000,age:25},
{name:'b',salary:25000,age:23},
{name:'d',salary:13000,age:30}];


arr.sort((a,b)=> (a.age - b.age) || (a.salary - b.salary));
console.log(arr);

arr.sort((a,b)=>{
    if(a.age > b.age) return 1;
    if(a.age < b.age) return -1;
    if(a.salary > b.salary) return 1;
    if(a.salary < b.salary) return -1;
    return 0;
})
console.log(arr)