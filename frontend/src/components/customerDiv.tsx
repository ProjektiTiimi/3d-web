import * as React from 'react';
import Customer from '../models/customer';
import { Link } from 'react-router-dom';

const CustomerDiv = (customer:Customer) => {
    return(
    <div className="customerDiv">
        <Link to={`/customer:${customer._id}`}><h3>Nimi: {customer.asiakkaanNimi} Toimipaikka: {customer.Toimipaikka}</h3></Link>
    </div>
)}

export default CustomerDiv