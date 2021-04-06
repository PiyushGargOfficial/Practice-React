import React from 'react';
import ReactDOM from 'react-dom';

const firstName = 'Piyush';
const lastName = 'Garg';

ReactDOM.render(
<>
    <h1>{`${firstName} ${lastName}`}</h1>
    <p>I'm practicing react.</p>
</>
 , document.getElementById('root'));