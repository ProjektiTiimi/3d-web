import React, { useState } from 'react';
import Customer from '../models/customer';


const Editcustomer = () => {
    const querystring = window.location.search;
    const urlParams = new URLSearchParams(querystring);
    const id = urlParams.get('id');
    const [customer, setCustomer] = React.useState<Customer>();

    const getData = async () => {
        console.log(id)
        const response = await fetch('http://localhost:1337/customer/:' + id, {
            method:'GET',
            headers:{'Content-type':'application/json',
                    'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmltaSIsImlhdCI6MTYzNjAxMzE0Nn0.J7WXTauzQrft0-EOb7jxvBCc4NQzlIpTR8P6HvMXzdE'}
                     });
        const data = await response.json()
        console.log(data)
        setCustomer(data)
    }

    React.useEffect(()=> {
        getData();
    }, []);

    const [input, setInput] = useState<Customer>({
        YTunnus: "",
        asiakkaanNimi: "",
        Postitusosoite: "",
        Postinumero: "",
        Toimipaikka: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void =>{
        fetch('http://localhost:1337/customer/:' + id, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json',
                        'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmltaSIsImlhdCI6MTYzNjAxMzE0Nn0.J7WXTauzQrft0-EOb7jxvBCc4NQzlIpTR8P6HvMXzdE'},
            body: JSON.stringify({
                YTunnus: input.YTunnus,
                asiakkaanNimi: input.asiakkaanNimi,
                Postitusosoite: input.Postitusosoite,
                Postinumero: input.Postinumero,
                Toimipaikka: input.Toimipaikka
            })
        })
        .then(function(data){
            console.log("Request succeeded with response ", data)            
        })
        .catch(function(error){
            console.log("Request failed ", error)
        })
        setInput({
            YTunnus: "",
            asiakkaanNimi: "",
            Postitusosoite: "",
            Postinumero: "",
            Toimipaikka: ""
        })
    }

    return(
        <div className="AddCustomer">
            <h3>Muokkaa asiakasta</h3>
                <input 
                    type="text"
                    placeholder={"Y-Tunnus"}
                    className="AddCustomer-input"
                    onChange={handleChange}
                    name="YTunnus"
                    value={input.YTunnus}
                />
                <input 
                    type="text"
                    placeholder="Yrityksen nimi"
                    className="AddCustomer-input"
                    onChange={handleChange}
                    name="asiakkaanNimi"
                    value={input.asiakkaanNimi}
                />
                <input 
                    type="text"
                    placeholder="Osoite"
                    className="AddCustomer-input"
                    onChange={handleChange}
                    name="Postitusosoite"
                    value={input.Postitusosoite}
                />
                <input 
                    type="text"
                    placeholder="Postinumero"
                    className="AddCustomer-input"
                    onChange={handleChange}
                    name="Postinumero"
                    value={input.Postinumero}
                />
                <input 
                    type="string"
                    placeholder="Kaupunki"
                    className="AddCustomer-input"
                    onChange={handleChange}
                    name="Toimipaikka"
                    value={input.Toimipaikka}
                />            
            <button 
                className = "AddCustomer-btn"
                onClick={handleClick}>
                Tallenna
            </button>
        </div>
    )
}

export default Editcustomer