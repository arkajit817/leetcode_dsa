let  obj = {}
let str = "arkajit"
let arr = [];
str = str.split('');
 str.forEach((e,i)=>{
    obj[str[i]]= obj[str[i]]?  obj[str[i]]+1 : 1;
})

console.log(obj)