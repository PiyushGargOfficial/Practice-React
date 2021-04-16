import React from 'react';
// import Practice from './NewPractice/NewPractice'
import Navbar from './NewPractice/Navbar'
import Home from './NewPractice/Home';

const App = () => {
    return ( 
        <>
          <div className="App">
          <Navbar />
          <div className="content">
            <Home />
          </div>
          </div>
        </>
     );
}
 
export default App;

