import React, { useEffect, useState } from "react";
import Item from "./Item";
import ItemModel from "../models/ItemModel";

function LineInfo() {
    const item = React.useState<ItemModel>();
    const itemList = (items:ItemModel[]) => (
        <ul>
            {items.map(Item)}
        </ul>
    )

    return(
        <div className="Invoice">
            <h3>Rivitiedot</h3>
            <Item />
            <button>Lisää</button><button>Poista</button>
            <input
                id="VerollinenHinta" 
                type="checkbox"
                className="Invoice-checkbox"
                name="Verollinen hinta"
                />
            <label>Verollinen Hinta</label>
        </div>
    )
}

export default LineInfo