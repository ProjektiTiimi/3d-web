import { useContext } from "react";
import './invoicePDF.css'
import CustomerContext from '../customerContext';

const InvoicePDF = () => {
    const { defaultCustomer, setDefaultCustomer } = useContext(CustomerContext);
    return(
        <div className="invoicePDF" >
            <header className="invoicePDF-header">
                <h2>invoicePDF-header</h2>
                <h4>tänne kuva, päiväys, eräpäivä</h4>
            </header>
            <div className="invoicePDF-rows">
                <h2>invoicePDF-rows</h2>
                <h4>tähän laskun tiedot, ja kokonaissumma</h4>
            </div>
            <div className="invoicePDF-invoice">
                <div className="invoicePDF-biller">
                    <h3>invoicePDF-biller</h3>
                    <h4>laskuttajan tiedot</h4>
                </div>
                <div className="invoicePDF-customer">
                    <table className="customer-table">
                        <tr>
                            <td>Saajan tilinumero</td>
                            <td>123345</td>
                            <td>BIC</td>
                        </tr>
                        <tr>
                            <td>Saaja</td>
                            <td>Saajan nimi</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Maksajan tiedot</td>
                            <td>
                                <div>{defaultCustomer.asiakkaanNimi}</div>
                                <div>{defaultCustomer.Postitusosoite}</div>
                                <div>{defaultCustomer.Postinumero} {defaultCustomer.Toimipaikka}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>allekirjoitus</td>
                            <td></td>
                            <td>viitenumero</td>
                        </tr>
                        <tr>
                            <td>tililtä nro</td>
                            <td></td>
                            <td>eräpäivä, summa</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
)}

export default InvoicePDF