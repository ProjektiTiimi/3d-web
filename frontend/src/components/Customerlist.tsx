import * as React from 'react';
import { useContext, Component } from "react";
import Customer from '../models/customer';
import CustomerDiv from './customerDiv';
import configData from "../config/configData.json"


function Customerlist() {
    const [total, setTotal] = React.useState(0);
    const [counter, setCounter]:any = React.useState(0);
    const [customers, setCustomers] = React.useState<Customer[]>([]);
    const [input, setinput] = React.useState("");
    const filteredList = customers.filter(Customer => {return Customer.asiakkaanNimi.toLowerCase().includes(input.toLowerCase())});
    const getData = async () => {
        const response = await fetch(`${configData.API_URL}:${configData.API_PORT}/customers`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json',
                        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmltaSIsImlhdCI6MTYzNjQ0NzMwNn0.jI7gmVQ20WsbU3QvJijqhTfkjn8EtZyilUUFYs9jL9Q'}
        });
        const data = await response.json();
        setTotal(data.length);
        setCustomers(data)
    }
    React.useEffect(()=> {
        getData();
    }, []);

    React.useEffect(()=> {
        setTotal(filteredList.length)
    }, [input]);

    const ClickPrev = () =>{
        if (counter>0 && counter < 10){
            setCounter(0)
        }
        else if(counter > 1){
            setCounter(counter -10)
        }
    }
    const ClickNext = () =>{
        console.log(total)
        if(counter < total && counter+20 > total && total > 10){
            setCounter(total-10)
        }
        else if(counter+20 <= total){
            setCounter(counter+10)
        }
    }

    
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinput(e.target.value);
        setCounter(0);
    }

    const showCustomers = filteredList.slice(counter, counter+10);

    return(
        <div className="customerList">
            <h3>Suodata</h3>
            <input type="text" className ="filter" value={input} onInput={inputChange}/>
            <h3>{(counter == 0) ? 0 : counter}-{(total > 10) ? counter+10 : total}/{total}</h3>
            <button className="prevButton" onClick={ClickPrev}> edelliset</button>
            {showCustomers
                .map(Customer =>(
                <CustomerDiv key={Customer._id}{...Customer}/>
            ))}
            <button className="nextButton" onClick={ClickNext}>seuraavat</button>
        </div>
    )
}


export default Customerlist
