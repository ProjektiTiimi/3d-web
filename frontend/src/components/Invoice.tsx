import React from "react";
import Customerlist from "./Customerlist";
import Invoiceinfo from "./Invoiceinfo";
import LineInfo from "./LineInfo";

function Invoice() {
    return(
        <div className="App">
            <Customerlist />
            <Invoiceinfo />   
            <LineInfo />     
        </div>
    )
}

export default Invoice