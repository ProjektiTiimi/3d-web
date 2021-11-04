import React from 'react';
import './LogOutButton.css';
import { Link } from 'react-router-dom';

export function LogOutButton() {
    return (
        <Link to='sign-up'>
            <button className='btn'>Kirjaudu ulos
            </button>
        </Link>
    );
}