import * as React from 'react';

const Homepage: React.FunctionComponent = () => {
    const testi = () => {console.log('testi')
    };
    let inputText:string = "Syötä tähän tekstiä jne"
    let guideText:string = "Syötä min. 3 merkkiä ylläolevaan kenttään ja klikkaa HAE"
    let buttonText:string = "HAE"
    return(
        <form>
            <h2>
            <input type="text" className="inputtesti" />
            </h2>
            <h3>
                {guideText}
            </h3>
            <button className = "formButton" onClick={testi}>
                {buttonText}
            </button>
        </form>
    )
};
export default Homepage;
