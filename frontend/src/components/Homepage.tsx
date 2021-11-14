import * as React from 'react';
import '../App.css'

import { BehaviorSubject } from 'rxjs';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser') || '{}'));

const Homepage: React.FunctionComponent = () => {

    return(
        <div className='homepage'>
            <h1>Tervetuloa, {currentUserSubject.value}</h1>
            <h3>
            </h3>
        </div>
    )
};
export default Homepage;
