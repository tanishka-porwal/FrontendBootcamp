import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import App from './App'
import Contact from './Components/Contact/Contact';

function Routing () {
  return (
    <div className="App">
       <Router>
          <Switch>
           <Route path="/contact" component={Contact} />
           <Route path="/" component={App}/>
            
        </Switch>
        </Router>
    </div>
  );
}

export default Routing;
