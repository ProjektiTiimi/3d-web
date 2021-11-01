import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import './App.css';
//Components
import Homepage from './components/Homepage';
import Navigation from './components/Navigation';
import Customerlist from './components/Customerlist';
import Invoice from './components/Invoice';
import Addcustomer from './components/Addcustomer';
import Editcustomer from './components/Editcustomer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/addcustomer" component={Addcustomer} />
          <Route path="/editcustomer" component={Editcustomer} />
          <Route path="/customers" component={Customerlist} />
          <Route path="/invoice" component={Invoice} />
        </Switch>    
    </div>
    </Router>
  );
}

export default App;
