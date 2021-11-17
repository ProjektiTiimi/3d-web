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
import TestiContext from './components/customerContext';
import invoiceContext from './components/invoiceContext';
import lineInfoContext from './components/LineInfoContext';

function App() {
  const [defaultCustomer, setDefaultCustomer] = useState({
    YTunnus : "default",
    asiakkaanNimi: "default",
    Postitusosoite: "default",
    Postinumero: "default",
    Toimipaikka: "default"
  },);

  const [defaultInvoice, setDefaultInvoice] = useState({    
        Tilinumero: "default",
        LaskunNumero: "default",
        LaskunPvm: "default",
        Erapaiva: "default",
        Viitenumero: "default",
        Viesti: "default",
        Tarkistenumero: "default"
    },);

  const [defaultLineInfo, setDefaultLineInfo] = useState([{
        selite: "",
        kpl: 0,
        hinta: 0.00,
        alv: 24
  }],);

  const value = {defaultCustomer, setDefaultCustomer};
  const invoiceInfo = {defaultInvoice, setDefaultInvoice};
  const lineInfo = {defaultLineInfo, setDefaultLineInfo};
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
            <invoiceContext.Provider value={invoiceInfo}>
            <lineInfoContext.Provider value={lineInfo}>
            <Route path="/invoice" component={Invoice} />
            </lineInfoContext.Provider>
            </invoiceContext.Provider>
          </Switch>
      </div>
      </Router>
    
    </TestiContext.Provider>
  );
}

export default App;
