import { useBarcode } from 'react-barcodes';
import { useContext } from "react";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './invoicePDF.css'
import CustomerContext from '../customerContext';
import invoiceContext from "../invoiceContext";
import lineInfoContext from "../LineInfoContext";


const InvoicePDF = () => {
    const { defaultCustomer, setDefaultCustomer } = useContext(CustomerContext);
    const { defaultInvoice, setDefaultInvoice } = useContext(invoiceContext);
    const { defaultLineInfo, setDefaultLineInfo } = useContext(lineInfoContext);
    const virtuaaliviivakoodi = require('virtuaaliviivakoodi')
    const duedate = defaultInvoice.Erapaiva.substr(2,10).split("-").join("");

    const options = {
        iban: defaultInvoice.Tilinumero,
        reference: defaultInvoice.Viitenumero,
        cents: 1225,
        due: duedate,
      }

    let tuloste = "123456";

    try {
        tuloste =virtuaaliviivakoodi(options);
    } catch (error) {
        console.log(error)
    }


    const { inputRef } = 
        useBarcode({
            value: tuloste,
            options: {
                format: "CODE128C",
                background: '#ffffff',
                height: 45,
                width: 1,
                fontSize: 11
            }
        })

      

    const ClickPDF = async () => {
        const element = document.getElementById("DivToPrint") as HTMLElement;
        const canvas = await html2canvas(element, {
            scale: 3,
            
        });
        const data = canvas.toDataURL('image/png');
     
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
          (imgProperties.height * pdfWidth) / imgProperties.width;
     
        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${defaultInvoice.LaskunNumero}.pdf`);
      };

    return(
        <div>
        <div className="invoicePDF" id="DivToPrint">
            <header className="invoicePDF-header">
                <table className="header-table">
                    <td style={{width:"390px"}}>
                        <table className ="header-left-table" style={{width:"100%"}}>
                            <tr>
                                <img style={{maxHeight:"100%", width:"250px"}} src="https://www.oamk.fi/images/Logot/Suomi-www-sahkoinen-png-rgb/www_sivut_ja_sahkoiset_esitykset_suomeksi_varillinen-02.png" alt="" />
                            </tr>
                            <tr>
                                <td style={{lineHeight:"20px"}}>
                                    <br />
                                    <div style={{fontSize:"16px", fontWeight:"bold"}}>{defaultCustomer.asiakkaanNimi}</div>
                                    <br />
                                    <div>{defaultCustomer.Postitusosoite}</div>
                                    <div>{defaultCustomer.Toimipaikka}</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td style={{width:"300px", verticalAlign:"top"}}>
                        <table className="header-right-table" style={{fontSize:"13px", textAlign:"right", width:"100%"}}>
                            <tr>
                                <td style={{fontWeight:"bold", fontSize:"17px", paddingBottom:"10px"}}>LASKU </td>
                            </tr>
                            <tr>
                                <td>Päiväys</td>
                                <td>{defaultInvoice.LaskunPvm}</td>
                            </tr>
                            <tr>
                                <td>Laskun numero</td>
                                <td>{defaultInvoice.LaskunNumero}</td>
                            </tr>
                            <tr>
                                <td>Asiakasnumero</td>
                                <td>{defaultCustomer.YTunnus}</td>
                            </tr>
                            <tr>
                                <td>Eräpäivä</td>
                                <td>{defaultInvoice.Erapaiva}</td>
                            </tr>
                            <tr>
                                <td>Viivästyskorko</td>
                                <td>{defaultInvoice.Viivastyskorko}</td>
                            </tr>
                            <tr>
                                <td>Viitenumero</td>
                                <td>{defaultInvoice.Viitenumero}{defaultInvoice.Tarkistenumero}</td>
                            </tr>
                            <tr>
                                <td>Maksuehto</td>
                                <td>{defaultInvoice.Maksuehto}</td>
                            </tr>
                        </table>
                    </td>
                </table>
            </header>
            <body className="invoicePDF-body">
                <div className="invoicePDF-rows" style={{fontSize:"13px"}}>
                    <table width="100%">
                        <th className="lineInfo-c1">Selite</th>
                        <th className="lineInfo-c2">Kpl</th>
                        <th className="lineInfo-c3">à-hinta</th>
                        <th className="lineInfo-c4">ALV %</th>
                        <th className="lineInfo-c5">Yhteensä €</th>

                    {defaultLineInfo.map((item) => {
                        console.log("invoice: " + JSON.stringify(defaultLineInfo))
                        return(
                            <tr>
                                <td className="lineInfo-c1">{item.selite}</td>
                                <td className="lineInfo-c2">{item.kpl}</td>
                                <td className="lineInfo-c3">{item.hinta}</td>
                                <td className="lineInfo-c4">{item.alv}</td>
                                <td className="lineInfo-c5">{((item.hinta + item.hinta*(item.alv/100))) * item.kpl}</td>
                            </tr>
                        )
                    })}
                    </table>
                    <table width="100%">
                        <tr>
                            <td className="total-c1">
                                <br></br>
                                Yhteensä (veroton)
                            </td>
                            <td className="total-c2">
                                <br></br>
                                0.00 €
                            </td>
                        </tr>
                        <tr>
                            <td className="total-c1">Veron osuus</td>
                            <td className="total-c2">0.00 €</td>
                        </tr>
                        <tr>
                            <td className="total-c3">YHTEENSÄ</td>
                            <td className="total-c3">0.00 €</td>
                        </tr>
                    </table>

                </div>
                <div className="invoicePDF-invoice">
                    <div className="invoicePDF-biller">
                        <table className="invoicePDF-billerTable">
                            <tr>
                                <td className="bt 1">
                                    <div>Firman Nimi OY</div>
                                    <div>firman osoite</div>
                                    <div>osoitteen loppuosa</div>
                                </td>
                                <td className="bt 2">
                                    <div>puhelinnumero</div>
                                    <div>email</div>
                                    <div>websivu</div>
                                </td>
                                <td className="bt 3 last">
                                    <div>Y-Tunnus</div>
                                    <div>ALV-tunnus</div>
                                </td>
                            </tr>
                            <tr>
                            </tr>
                        </table>
                    </div>
                    <div className="invoicePDF-customer">
                        <table className="customer-table">
                            <tr>
                                <td style={{textAlign:"right", padding:"5px"}}>
                                    <div style={{fontSize: "10px", lineHeight: "10px"}}>Saajan<br />tilinumero<br />Mottagarensbr<br />kontonummer</div>
                                </td>
                                <td>
                                    <div style={{fontSize: "10px", lineHeight: "10px"}}>IBAN</div>
                                    <div style={{marginTop: "4px"}}>{defaultInvoice.Tilinumero}</div>
                                </td>
                                <td colSpan={3} rowSpan={3} style={{ verticalAlign:"top"}}>
                                    <div style={{fontSize: "10px", lineHeight: "10px"}}>BIC</div>
                                    <div style={{marginTop: "4px"}}>OKOYFIHH</div>
                                </td>
                            </tr>
                            <tr>
                                <td style={{fontSize: "10px", textAlign:"right", padding:"5px"}}>Saaja <br /> Mottagare</td>
                                <td>Saajan nimi</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="noBottomBorder noRightBorder"  style={{fontSize: "10px", lineHeight:"10px", textAlign:"right", padding:"5px"}}>
                                    Maksajan <br />nimi ja <br />osoite <br />Betalarens <br />namn och <br />adress <br /><br /><br /><br />
                                </td>
                                <td className="td noBottomBorder" style={{padding:"5px"}}>
                                    <div>{defaultCustomer.asiakkaanNimi}</div>
                                    <div>{defaultCustomer.Postitusosoite}</div>
                                    <div>{defaultCustomer.Postinumero} {defaultCustomer.Toimipaikka}</div>
                                </td>
                            </tr>
                            <tr style={{display:"table-row"}}>
                                <td className="td noRightBorder" style={{fontSize: "10px", textAlign:"right", padding:"5px"}}>
                                    Allekirjoitus <br />Underskrift
                                </td>
                                <td style={{verticalAlign: "bottom"}}>
                                    <hr style={{margin: "8px 4px"}}/>
                                </td>
                                <td style={{padding:"5px", width:"5%", borderTop:"2px solid #333",  borderRight: "2px solid #333", fontSize:"10px"}}>
                                    <div>Viitenro <br />Ref.nr</div>
                                </td>
                                <td colSpan={2} style={{padding:"5px", borderTop:"2px solid #333", verticalAlign:"middle"}}>
                                    {defaultInvoice.Viitenumero}{defaultInvoice.Tarkistenumero}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div style={{fontSize: "10px", padding: "5px", textAlign:"right", lineHeight:"10px"}}> Tililtä nro <br />Från konto nro</div>
                                </td>
                                <td></td>
                                <td style={{fontSize: "10px", padding: "5px", borderRight: "2px solid #333", width: "5%", lineHeight:"10px"}}>
                                    <div>Eräpäivä<br />Förf.dag</div>
                                </td>
                                <td style={{padding: "5px", borderRight: "2px solid #333", width: "17%"}}>
                                    {defaultInvoice.LaskunPvm}
                                </td>
                                <td className="price">
                                    <table style={{width:"100%", height:"100%"}}>
                                        <tr>
                                            <td className="td noRightBorder noBottomBorder" style={{fontSize: "10px", lineHeight:"10px "}}>Euro</td>
                                            <td className="td noRightBorder noBottomBorder" style={{verticalAlign:"middle", textAlign:"right"}}>120.00</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <div style={{height:"72px"}}>
                            <img ref={inputRef} />
                        </div>
                    </div>
                </div>
            </body>
        </div>
        <div style={{marginTop:"50px"}}></div>
        <div style={{textAlign:"center", marginBottom:"50px"}}>
            <button className="printPDFButton" onClick={ClickPDF}>Lataa PDF</button>
            <button className="savePDFButton">Tallenna lasku</button>
        </div>
        </div>
        
)}

export default InvoicePDF