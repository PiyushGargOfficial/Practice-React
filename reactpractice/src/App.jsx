import Navbar from './NewPractice/Navbar';
import Home from './NewPractice/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './NewPractice/Create';
import BlogDetails from './NewPractice/BlogDetails';
import NotFound from './NewPractice/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
