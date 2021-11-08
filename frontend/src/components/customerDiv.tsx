import * as React from 'react';
import { useContext } from "react";
import Customer from '../models/customer';
import { Link } from 'react-router-dom';
import TestiContext from "./customerContext";



const CustomerDiv = (customer:Customer) => {
    const { defaultCustomer, setDefaultCustomer } = useContext(TestiContext);
    const klik = () =>{
        setDefaultCustomer(customer);
        console.log(defaultCustomer._id)
    }
    return(
        <div className="customerDiv" >
            <h3>{customer.asiakkaanNimi}<Link to={`/editcustomer/?id=${customer._id}`}>   <button onClick={klik}>Muokkaa</button></Link> 
            <button onClick={klik}>
            Valitse</button></h3>
        </div>
)}

export default CustomerDiv
