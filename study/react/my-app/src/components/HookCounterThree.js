import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' });
    return (
        <div>
            <form>
                <input type='text'
                    value={name.fisrtName}
                    onChange={e => setName({ ...name , firstName: e.target.value })} />
                <input type='text'
                    value={name.lastName}
                    onChange={e => setName({ ...name , lastName: e.target.value })} />
                <h2>Your firstname is - {name.firstName}</h2>
                <h2>Your lastname is - {name.lastName}</h2>
                <h2>Your name is - {JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree


//useState with object

//if we dont use spread operator it doesnt automatically merge the value of the object
// so if we type firstname , lastname disappears