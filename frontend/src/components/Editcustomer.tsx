import * as React from 'react';

function Editcustomer() {
    return(
        <div className="editCustomer">
            <form>
                <div className="editCustomer">
                    <h3>Muokkaa asiakasta</h3>
                </div>
                <input type="text" className="editCustomerInput" />
                <button className = "editButton" >
                    muokkaa
                </button>
                <button className = "deleteButton" >
                    poista
                </button>
                <button className = "saveButton" >
                    tallenna
                </button>
            </form>
        </div>
    )
}

export default Editcustomer