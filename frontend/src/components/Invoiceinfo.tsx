import React, { useContext, useEffect, useState } from "react";
import Invoice from '../models/Invoice';
import invoiceContext from './invoiceContext'


const Invoiceinfo = () => {    

    const [checked, setChecked] = useState<boolean>(true);
    const toggleChecked = () => setChecked(value => !value);

    const [input, setInput] = useState<Invoice>({
        Tilinumero: "",
        LaskunNumero: "",
        LaskunPvm:"",
        Erapaiva: "",
        Maksuehto: "",
        Viivastyskorko: "",
        Viitenumero:"",
        Viesti: "",
        Tarkistenumero: ""
    })
    
    const [checkNum, setCheckNum] = React.useState("2");

    if (checked == true) {
        input.Tarkistenumero = checkNum;
    }
    else if (checked == false) {
        input.Tarkistenumero = "";
    }

    const { defaultInvoice, setDefaultInvoice } = useContext(invoiceContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const addToInvoice = () => {
        setDefaultInvoice(input);
        console.log(JSON.stringify(input));
        calculate();  
    }

    const calculate = () => {
        let tArray = input.Viitenumero.split('').reverse();
        let tNumber:number = 0;
        for(let i = 0; i < tArray.length; i++){
            let addNum:number = +tArray[i];
            if(i % 3 == 0){
                tNumber += 7*addNum;
            }
            else if(i % 3 == 1){
                tNumber += 3*addNum;
            }
            else if(i % 3 == 2){
                tNumber += addNum;
            }
            else{
            }
        }
        let checknumber = (10 - (tNumber % 10)).toString();
        setCheckNum(checknumber);
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
                    name="LaskunNumero"
                    value={input.LaskunNumero}
                />
                <div>
                <input 
                    type="date"
                    placeholder="Laskun pvm"
                    className="Invoice-date"
                    onChange={handleChange}
                    name="LaskunPvm"
                    value={input.LaskunPvm}
                />                  
                <input 
                    type="date"
                    placeholder="Eräpäivä"
                    className="Invoice-date"
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
                    checked={checked}
                    className="Invoice-checkbox"
                    onChange={toggleChecked}
                    name="Tarkistenumero"
                    value={input.Tarkistenumero}
                />
                <label htmlFor="Viesti">Tarkistenumero</label>
                </div>             
                <input 
                    type="text"
                    placeholder="Viesti"
                    className="Invoice-input"
                    onChange={handleChange}
                    name="Viesti"
                    value={input.Viesti}
                />
                
                <input
                    className="Invoice-input"
                    type="text"
                    value={input.LaskunPvm}
                />
                <input
                    className="Invoice-input"
                    type="text"
                    value={defaultInvoice.Tilinumero}
                />
                <input
                    className="Invoice-input"
                    type="text"
                    value={input.Viitenumero + checkNum}
                />
                <button 
                    className="AddCustomer-btn"
                    onClick={ addToInvoice }>
                Lisää laskulle
                </button>
        </div>
    )
}

export default Invoiceinfo