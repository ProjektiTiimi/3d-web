import * as React from 'react';
import Customer from '../models/customer';
import CustomerDiv from './customerDiv';


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
        if (counter>0 && counter < 10){
            setCounter(0)
        }
        else if(counter > 1){
            setCounter(counter -10)
        }
    }
    const ClickNext = () =>{
        if(counter < total && counter+20 > total){
            setCounter(total-10)
        }
        else if(counter+20 < total){
            setCounter(counter+10)
        }
    }

    const showCustomers = customers.slice(counter, counter+10)
    console.log("showCustomers: "+showCustomers)
    return(
        <div className="customerList">
            <h3>{counter+1}-{counter+10}/{total}</h3>
            <button className="prevButton" onClick={ClickPrev}> edelliset</button>
            {showCustomers.map(Customer =>(
                <CustomerDiv key={Customer._id}{...Customer}
                />
            ))}
            <button className="nextButton" onClick={ClickNext}>seuraavat</button>
            <button className="updateButton" onClick={getData}>Päivitä</button>
        </div>
    )
}

export default Customerlist