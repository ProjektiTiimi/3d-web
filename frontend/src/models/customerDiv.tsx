import * as React from 'react';
import Customer from './customer';

const CustomerDiv = (customer:Customer) => {
    return(
    <div>
        <h3>Nimi: {customer.asiakkaanNimi} Toimipaikka: {customer.Toimipaikka}</h3>
    </div>
)}

export default CustomerDiv