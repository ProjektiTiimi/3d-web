import React , { createContext } from 'react';
import Items from '../models/Item';

type contextType = {
    defaultLineInfo: Items,
    setDefaultLineInfo: (defaultLineInfo: Items) => void
}

const lineInfoContext = createContext<contextType>({
    defaultLineInfo: [{
        selite: "default",
        kpl: 0,
        hinta: 0,
        alv: "default",
    }],
    setDefaultLineInfo: (defaultLineInfo : Items) => {}
})



export default lineInfoContext