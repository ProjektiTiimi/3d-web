import React , { createContext } from 'react';
import Item from '../models/Item';

// type contextType = {
//     defaultLineInfo: Items,
//     setDefaultLineInfo: (defaultLineInfo: Items) => void
// }

interface contextType {
    defaultLineInfo:Item[]
    setDefaultLineInfo:(data:Item[]) => void
}

const defaultLineInfo: contextType = {
    defaultLineInfo:[{
        selite: "",
        kpl: 0,
        hinta: 0,
        alv: ""
    }],
    setDefaultLineInfo: (data) => {}
}

const lineInfoContext = createContext<contextType>(defaultLineInfo)

// const lineInfoContext = createContext<contextType>({
//     defaultLineInfo: [{
//         selite: "default",
//         kpl: 0,
//         hinta: 0,
//         alv: "default",
//     }],
//     setDefaultLineInfo: (defaultLineInfo : Items) => {}
// })

export default lineInfoContext