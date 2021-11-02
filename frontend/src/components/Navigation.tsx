import * as React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <div className="navigationBar">
            <ul>
                <Link to="/">
                    <li>Etusivulle</li>
                </Link>
                <Link to="/customers">
                    <li>Näytä asiakkaat</li>
                </Link>
                <Link to="/addcustomer">
                    <li>Lisää asiakas</li>
                </Link>
                <Link to="/editcustomer">
                    <li>Muokkaa asiakasta</li>
                </Link>
                <Link to="/invoice">
                    <li>Lasku</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navigation