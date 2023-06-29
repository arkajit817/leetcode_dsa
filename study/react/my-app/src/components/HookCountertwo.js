import React, { useState } from 'react'

function HookCountertwo() {
    const initialCount = 0;
    const [count, setCount] = useState(0);
    const incrementFive = ()=>{
        for(let i=0; i < 5;i++){
            // setCount(count+1);// if we write this it'll increment only 1 not 5
            setCount(prevCount => prevCount + 1);// if we write this it'll increment only 1 not 5
        }
    }
    return (
        <div>
            count : {count}
            <button onClick={()=> setCount(initialCount)}> Reset</button>
            {/* <button onClick={()=> setCount(count + 1)}> Increment</button> */}
            <button onClick={()=> setCount(prevCount => prevCount + 1)}> Increment</button>
            {/* <button onClick={()=> setCount(count - 1)}> Deccrement</button> */}
            <button onClick={()=> setCount(prevCount => prevCount - 1)}> Deccrement</button>
            <button onClick={incrementFive}> incrementFive</button>
        </div>
    )
}

export default HookCountertwo

// useState with previous stat