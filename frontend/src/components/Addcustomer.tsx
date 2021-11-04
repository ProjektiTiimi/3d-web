import React, { useState } from 'react';
import Customer from '../models/customer';


const Addcustomer = () => {
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
        fetch('http://localhost:1337/customer', {
            method: 'POST',
            headers: { 'Content-type': 'application/json', 
                        'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmltaSIsImlhdCI6MTYzNjAyOTM1MX0._9mpMIpYLJD_FwxjbfpjufnBM1MaV59FArj87tJGRl4'},
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
            <h3>Lisää asiakas</h3>
                <input 
                    type="text"
                    placeholder="Y-Tunnus"
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
                Lisää asiakas
            </button>
        </div>
    )
}

export default Addcustomer