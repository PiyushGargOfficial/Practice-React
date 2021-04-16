import React, {useState} from 'react';



const ClickCounter = () => {

var [count, setCount] = useState(5);

const IncNum = () => {
    setCount(count + 1);
}
    
    return(
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>Click</button>
        </>
    )
}

export default ClickCounter