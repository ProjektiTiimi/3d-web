import * as React from 'react';
import Customer from '../models/customer';

const TestiContext = React.createContext({
    defaultCustomer: {
        _id : "",
        YTunnus : "default",
        asiakkaanNimi: "default",
        Postitusosoite: "default",
        Postinumero: "default",
        Toimipaikka: "default"
    },
    setDefaultCustomer: (defaultCustomer : Customer) => {}
});

export default TestiContext