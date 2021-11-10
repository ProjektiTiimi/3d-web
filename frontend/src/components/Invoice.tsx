import React from "react";
import Customerlist from "./Customerlist";
import Invoiceinfo from "./Invoiceinfo";
import InvoicePDF from "./InvoicePDF/InvoicePDF";

function Invoice() {
    return(
        <div className="App">
            <Customerlist />
            <Invoiceinfo />
            <InvoicePDF />        
        </div>
    )
}

export default Invoice