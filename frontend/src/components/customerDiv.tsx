import * as React from 'react';
import { useContext } from "react";
import Customer from '../models/customer';
import { Link } from 'react-router-dom';
import TestiContext from "./testiContext";



const CustomerDiv = (customer:Customer) => {
    const { defaultCustomer, setDefaultCustomer } = useContext(TestiContext);
    const klik = () =>{
        setDefaultCustomer(customer);
    }
    return(
        <div className="customerDiv" >
            <h3>{customer.asiakkaanNimi}<Link to={`/customer:${customer._id}`}>   <button onClick={klik}>Muokkaa</button></Link> 
            <button onClick={klik}>
            Valitse</button></h3>
        </div>
)}

export default CustomerDiv
