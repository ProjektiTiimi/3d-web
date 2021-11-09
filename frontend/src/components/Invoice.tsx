import React from "react";
import Customerlist from "./Customerlist";
import Invoiceinfo from "./Invoiceinfo";

function Invoice() {
    return(
        <div className="App">
            <Customerlist />
            <Invoiceinfo />        
        </div>
    )
}

export default Invoice