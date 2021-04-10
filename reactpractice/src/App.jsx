import './index.css';
import * as All from './Components/Heading';
import React from 'react';
import ReactDOM from 'react-dom';

const firstName = 'Piyush';
const lastName = 'Garg';

const heading1 = {
    color: 'red',
    fontSize : '54px',
    textAlign : 'center'
}
var greeting;

const date = new Date().getHours()

if(date<12){
    greeting = 'Morning'
}
else if(date>12 && date<20){
    greeting = 'Afternoon'
}
else{
    greeting = 'Night'
}

function App() {
    return (
        <>
            <All.default />
            <div>{All.favColor}</div>
            <div>Hi, Good {greeting}</div>
            <h1 style={heading1}>{`${firstName} ${lastName}`}</h1>
            <p>I'm practicing react.</p>
        </>
    )
}

export default App