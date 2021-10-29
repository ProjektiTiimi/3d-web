import * as React from 'react';

const customerForm: React.FunctionComponent = () => {
    const testi = () => {console.log('testi')
    };
    return(
        <form>
            <input type="text" className="inputtesti" />
            <div className="testi">
                <p>asd</p>
            </div>
            <button className = "formButton" onClick={testi}>
                Testibutton
            </button>
        </form>
    )
};
export default customerForm;
