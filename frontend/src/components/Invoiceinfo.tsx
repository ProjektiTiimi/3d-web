import React, { useEffect, useState } from "react";
import Invoice from '../models/Invoice';


const Invoiceinfo = () => {
    const [input, setInput] = useState<Invoice>({
        Tilinumero: "",
        LaskunNumero: "",
        LaskunPvm:"",
        Erapaiva: "",
        Maksuehto: "",
        Viivastyskorko: "",
        Viitenumero:"",
        Tarkistenumero: true,
        Viesti: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input.Tarkistenumero)
    }

    // const handleClick = (): void =>{
    //     fetch('http://localhost:1337/customer', {
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json'},
    //         body: JSON.stringify({
    //             YTunnus: input.YTunnus,
    //             asiakkaanNimi: input.asiakkaanNimi,
    //             Postitusosoite: input.Postitusosoite,
    //             Postinumero: input.Postinumero,
    //             Toimipaikka: input.Toimipaikka
    //         })
    //     })
    //     .then(function(data){
    //         console.log("Request succeeded with response ", data)            
    //     })
    //     .catch(function(error){
    //         console.log("Request failed ", error)
    //     })
    //     setInput({
    //         YTunnus: "",
    //         asiakkaanNimi: "",
    //         Postitusosoite: "",
    //         Postinumero: "",
    //         Toimipaikka: ""
    //     })
    // }

    return(
        <div className="Invoice">
            <h3>Laskun tiedot</h3>
                <input 
                    type="text"
                    placeholder="Tilinumero"
                    className="Invoice-input"
                    onChange={handleChange}
                    name="Tilinumero"
                    value={input.Tilinumero}
                />
                
                <input 
                    type="text"
                    placeholder="Laskun numero"
                    className="Invoice-input"
                    onChange={handleChange}
                    name="laskunNumero"
                    value={input.LaskunNumero}
                />
                <div className="Invoice-date">
                <input 
                    type="date"
                    placeholder="Laskun pvm"
                    className="Invoice-date"
                    onChange={handleChange}
                    name="LaskunPvm"
                    value={input.LaskunPvm}
                />
                <span className="date-tooltip">Laskun pvm</span>                   
                <input 
                    type="date"
                    placeholder="Eräpäivä"
                    onChange={handleChange}
                    name="Erapaiva"
                    value={input.Erapaiva}
                />
                </div>
                <div>
                <input 
                    type="text"
                    placeholder="Maksuehto"
                    className="AddCustomer-input"
                    onChange={handleChange}
                    name="Maksuehto"
                    value={input.Maksuehto}
                />
                <input 
                    type="text"
                    placeholder="Viivästyskorko"
                    className="Invoice-input"
                    onChange={handleChange}
                    name="Viivastyskorko"
                    value={input.Viivastyskorko}
                />
                </div>
                <div>
                <input 
                    type="text"
                    placeholder="Viitenumero"
                    className="Invoice-input"
                    onChange={handleChange}
                    name="Viitenumero"
                    value={input.Viitenumero}
                />                
                <input
                    id="Tarkistenumero" 
                    type="checkbox"
                    defaultChecked
                    className="Invoice-checkbox"
                    onChange={handleChange}
                    name="Tarkistenumero"
                />
                <label htmlFor="Viesti">Tarkistenumero</label>
                </div>
                <div>              
                <input 
                    type="text"
                    placeholder="Viesti"
                    className="Invoice-input"
                    onChange={handleChange}
                    name="Viesti"
                    value={input.Viesti}
                />
                <button className="Edit-btn">
                    <i className="fas fa-edit"/>    
                </button>
                </div>
                
                <input
                    className="Invoice-input"
                    type="text"
                    value={input.LaskunPvm}
                />
                <input
                    className="Invoice-input"
                    type="text"
                    value={input.Erapaiva}
                />
                
        </div>
    )
}

export default Invoiceinfo