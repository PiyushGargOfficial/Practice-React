import React from 'react';
// import Practice from './NewPractice/NewPractice'
import Navbar from './NewPractice/Navbar'
import Home from './NewPractice/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './NewPractice/Create';
import BlogDetails from './NewPractice/BlogDetails'

const App = () => {
    return ( 
        <>
        <Router>
          <div className="App">
          <Navbar />
          <div className="content">
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/create' component={Create} exact/>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
          </div>
          </div>
        </Router>
        </>
     );
}
 
export default App;

