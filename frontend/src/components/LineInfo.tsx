import React, { useEffect, useState } from "react";
import Item from "./Item";
import ItemModel from "../models/ItemModel";

function LineInfo() {
    const items = React.useState<ItemModel[]>([]);
    let itemCounter = 0;
    const ItemList = [Item(itemCounter)];
    ItemList.push(Item(itemCounter));

    const AddItem = () => {
        ItemList.push(Item(itemCounter));
        itemCounter++;
    }

    const RemoveItem = () => {
        delete ItemList[itemCounter];
        itemCounter--;
    }

    return(
        <div className="Invoice">
            <h3>Rivitiedot</h3>

            {ItemList.map(item => (
                item
            ))}

            <button className="" onClick={AddItem}>Lisää</button>
            <button className="" onClick={RemoveItem}>Poista</button>

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