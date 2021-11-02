import * as React from 'react';
import Customer from '../models/customer';
import CustomerDiv from '../models/customerDiv';


function Customerlist(){
    const [total, setTotal] = React.useState(0);
    const [customers, setCustomers] = React.useState<Customer[]>([]);
    const [counter, setCounter]:any = React.useState(0);
    const getData = async () => {
        const response = await fetch('http://localhost:1337/customers');
        const data = await response.json();
        setTotal(data.length);
        setCustomers(data)
        console.log(customers)
        console.log("counter: " + counter)
        console.log("totalcustomers: " +total)
    }
    React.useEffect(()=> {
        getData();
    }, []);

    const ClickPrev = () =>{
        if(counter > 0){
            setCounter(counter -1)
        }
    }
    const ClickNext = () =>{
        if(counter+2 < total){
            setCounter(counter + 1)
        }
    }

    const showCustomers = customers.slice(counter, counter+2)
    console.log("showCustomers: "+showCustomers)
    return(
        <div className="customerList">
            <h3>{counter+1}-{counter+2}/{total}</h3>
            <button onClick={ClickPrev}> edelliset</button>
            {showCustomers.map(Customer =>(
                <CustomerDiv {...Customer}
                />
            ))}
            <button onClick={ClickNext}>seuraavat</button>
            <button onClick={getData}>Päivitä</button>
        </div>
    )
}

export default Customerlist