import React, { useState } from "react";

function LineInfo() {
    const [inputList, setInputList] = useState([{
        selite: "",
        kpl: 0,
        hinta: 0,
        alv: "",
    }])

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleAddClick = () => {
        setInputList([...inputList, {
            selite: "",
            kpl: 0,
            hinta: 0,
            alv: "",
        }])
    }

    return (
        <div className="Invoice">
            <h3>Rivitiedot</h3>

            {inputList.map((x, i) => {
                return (
                    <div className="Invoice">
                        <input 
                            type="text"
                            placeholder="Selite"
                            className="Invoice-input"
                            onChange={e => handleInputChange(e, i)}
                            name="selite"
                            value={x.selite}
                        />
                        <input 
                            type="number"
                            placeholder="Kpl"
                            className="Invoice-input"
                            onChange={e => handleInputChange(e, i)}
                            name="kpl"
                            value={x.kpl}
                        />
                        <input 
                            type="number"
                            placeholder="Hinta"
                            className="Invoice-input"
                            onChange={e => handleInputChange(e, i)}
                            name="hinta"
                            value={x.hinta}
                        />
                        <select 
                            className="Invoice-input"
                            name="alv"
                            onChange={e => handleInputChange(e, i)}>
                            <option value="24">24%</option>
                            <option value="14">14%</option>
                            <option value="10">10%</option>
                            <option value="0">0%</option>
                        </select>
                        <div className="Invoice">
                            {inputList.length !== 1 && 
                                <button
                                    className=""
                                    onClick={() => handleRemoveClick(i)}>
                                    Poista
                                </button>
                            }
                            {inputList.length - 1 === i &&
                                <button 
                                    className=""
                                    onClick={handleAddClick}>
                                    Lisää
                                </button>
                            }
                        </div>
                    </div>
                )
            })}

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