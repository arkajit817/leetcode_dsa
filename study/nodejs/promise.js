function checkMail (){
    return new Promise((resolve,reject)=>{
        if(Math.random()>0.5){
            resolve('mail has arrived');
        } else{
            reject('not')
        }
    })
}


checkMail()
    .then((mail)=>{
        console.log()
    })