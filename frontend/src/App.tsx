import React, { useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import './App.css';
//Components
import Customer from './models/customer';
import Homepage from './components/Homepage';
import Customerlist from './components/Customerlist';
import Invoice from './components/Invoice';
import Addcustomer from './components/Addcustomer';
import Editcustomer from './components/Editcustomer';
import Navbar from './components/Navbar/Navbar';
import TestiContext from './components/testiContext';

function App() {
  const [defaultCustomer, setDefaulCustomer] = useState({
    _id : "",
    YTunnus : "default",
    asiakkaanNimi: "default",
    Postitusosoite: "default",
    Postinumero: "default",
    Toimipaikka: "default"
  },);
  const value = {defaultCustomer, setDefaulCustomer};
  return(
    <TestiContext.Provider value={value}>
      <Router>
        <div className="App">
          <Navbar />
          {/*<Navigation/>*/}
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/addcustomer" component={Addcustomer} />
            <Route path="/editcustomer" component={Editcustomer} />
            <Route path="/customers" component={Customerlist} />
            <Route path="/invoice" component={Invoice} />
          </Switch>
      </div>
      </Router>
    </TestiContext.Provider>
  );
}

export default App;
