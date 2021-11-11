import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Invoice from '../models/Invoice';
import invoiceContext from './invoiceContext'
import customerContext from "./customerContext";


const Invoiceinfo = () => {    

    const [checked, setChecked] = useState<boolean>(true);
    const toggleChecked = () => setChecked(value => !value);

    const {defaultCustomer} = useContext(customerContext);

    let currentDate:Date = new Date();
    let date:string = currentDate.toISOString().substr(0,10);
    let invoiceDate:string = currentDate.toISOString();
    let invoiceNmbr = Date.parse(invoiceDate);

    let newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);        
    let dDate = newDate.toISOString().substr(0,10);

    const[dueDate, setDueDate] = useState<string>(dDate);
    const[payCondition, setPayCondition] = useState<string>("7");

    
    const [input, setInput] = useState<Invoice>({
        Tilinumero: defaultCustomer.YTunnus,
        LaskunNumero: invoiceNmbr.toString(),
        LaskunPvm: date,
        Erapaiva: dueDate,
        Maksuehto: payCondition + " päivää netto",
        Viivastyskorko: "7,5 %",
        Viitenumero: invoiceNmbr.toString(),
        Viesti: "",
        Tarkistenumero: ""
    })
    
    let checkNum = "2";
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

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
        setPayCondition(e.target.value)}

    const handleDays = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPayCondition(e.target.value)

    }

    const handleNumber = () => {
        input.Tilinumero = defaultCustomer.YTunnus
        console.log("Tilinumero " + input.Tilinumero);
    }
    

    useEffect( () => {
        let datum = Date.parse(input.LaskunPvm);
        let newDate = new Date(datum);
        newDate.setDate(newDate.getDate() + parseInt(payCondition));
        console.log("LaskunPvm is : " + payCondition + " days");       
        let fDate = newDate.toISOString().substr(0,10);
        input.Erapaiva = fDate;
        input.Maksuehto = payCondition + " päivää netto"
        setDueDate(fDate)
    }, [input.LaskunPvm, payCondition]);

    /* useEffect( () => { 
        setDefaultInvoice(input)
    }, [input.Tilinumero]); */

    useEffect( () => { 
        setDueDate(input.Erapaiva)
    }, [input.Erapaiva]);

    const addToInvoice = () => {
        setDefaultInvoice(input);
        console.log(JSON.stringify(input))        
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
                    value={dueDate}
                />
                </div>
                
                <div>
                <select value={payCondition} 
                        onChange={handleSelect}
                        className="Invoice-select">
                    <option value="7">7</option>
                    <option value="14">14</option>
                    <option value="21">21</option>
                </select>
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
                <button 
                    className="AddCustomer-btn"
                    onClick={ addToInvoice }>
                Lisää laskulle
                </button>
        </div>
    )
}

export default Invoiceinfo