import React from "react";
import Customerlist from "./Customerlist";
import Invoiceinfo from "./Invoiceinfo";

function Invoice() {
    return(
        <div className="App">
            <Customerlist />
            <Invoiceinfo />
            <div className="AddCustomer">
                <form>
                    <h3>lasku</h3>
                    <input 
                        type="text"
                        placeholder="Tilinumero"
                        className="Invoice-input"
                        name="Tilinumero"
                        value="Testikenttä"
                    />
                    <input 
                        type="text"
                        placeholder="Laskun numero"
                        className="Invoice-input"
                        name="laskunNumero"
                        value="Testikenttä 2"
                    />
                </form>
            </div>
            
        </div>
    )
}

export default Invoice