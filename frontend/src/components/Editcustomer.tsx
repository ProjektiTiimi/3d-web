import React, { useState } from 'react';
import Customer from '../models/customer';


const Editcustomer = (givenCustomer:Customer) => {
    const [input, setInput] = useState<Customer>({
        YTunnus: givenCustomer.YTunnus,
        asiakkaanNimi: givenCustomer.asiakkaanNimi,
        Postitusosoite: givenCustomer.Postitusosoite,
        Postinumero: givenCustomer.Postinumero,
        Toimipaikka: givenCustomer.Toimipaikka
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void =>{
        fetch('http://localhost:1337/customer:' + givenCustomer._id, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json'},
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
                Tallenna
            </button>
        </div>
    )
}

export default Editcustomer