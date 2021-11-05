import * as React from 'react';
import Customer from '../models/customer';

const TestiContext = React.createContext({
    id : "defaultID",
    setID: (id:string) => {}
  });

export default TestiContext