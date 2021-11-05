import * as React from 'react';
import { useContext } from "react";
import Customer from '../models/customer';
import { Link } from 'react-router-dom';
import TestiContext from "./testiContext";



const CustomerDiv = (customer:Customer) => {
    const { id, setID } = useContext(TestiContext);
    const klik = () =>{
        console.log("asiakkaan Y-tunnus: " + customer.YTunnus)
        setID(customer._id!)
    }
    return(
        <div className="customerDiv" >
            <h3>{customer.asiakkaanNimi}<Link to={`/customer:${customer._id}`}>   <button onClick={klik}>Muokkaa</button></Link> 
            <button onClick={klik}>
            Valitse</button></h3>
        </div>
)}

export default CustomerDiv
