let promise = tasks.reduce((prev.task)=>{
      return prev.then(()=>{
          retuen task();
      });
},Promise.resolve());