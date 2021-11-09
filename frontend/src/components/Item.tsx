import React, { useEffect, useState } from "react";
import ItemModel from "../models/ItemModel";


const Item = () => {
    const [input, setInput] = useState<ItemModel>({
        Selite: "",
        kpl: "",
        hinta: "",
        alv: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className="Invoice">
            <input 
                type="text"
                placeholder="Selite"
                className="Invoice-input"
                onChange={handleChange}
                name="Selite"
                value={input.Selite}
            />
            <input 
                type="number"
                placeholder="Kpl"
                className="Invoice-input"
                onChange={handleChange}
                name="kpl"
                value={input.kpl}
            />
            <input 
                type="number"
                placeholder="Hinta"
                className="AddCustomer-input"
                onChange={handleChange}
                name="Hinta"
                value={input.hinta}
            />
            <select 
                className="Invoice-input"
                name="Alv">
                <option value="24">24%</option>
                <option value="14">14%</option>
                <option value="10">10%</option>
                <option value="0">0%</option>
            </select>
        </div>
    )
}

export default Item