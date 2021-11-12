import * as React from 'react';

interface Item{ 
    selite: string;
    kpl: number;
    hinta: number;
    alv: string;
}

export default interface Items extends Array<Item>{};