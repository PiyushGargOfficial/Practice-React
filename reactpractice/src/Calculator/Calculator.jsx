import React from 'react';
import ReactDOM from 'react-dom';
import {Add, Sub, Divide, Multiply} from './Operations';
import styleCalc from './Styling'

function Calculator(){
    return (
        <>
            <ul style={styleCalc}>
                <li>Addition of two numbers is: {Add(30,3)}</li>
                <li>Subtraction of two numbers is: {Sub(30,3)}</li>
                <li>Mulitplication of two numbers is: {Multiply(30,3)}</li>
                <li>Division of two numbers is: {Divide(30,3)}</li>
            </ul>
        </>
    )
}

export default Calculator;