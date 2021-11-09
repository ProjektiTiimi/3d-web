import * as React from 'react';

interface Invoice{
    Tilinumero: string;
    LaskunNumero: string;
    LaskunPvm: string;
    Erapaiva: string;
    Maksuehto?: string;
    Viivastyskorko?: string;
    Viitenumero: string;
    Tarkistenumero: boolean;
    Viesti: string;
}

export default Invoice;