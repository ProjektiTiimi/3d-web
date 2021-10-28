import {Express, Request, Response} from "express";
const express = require('express');
const router = express.Router();
const Customer = require('../Models/post');

router.get('/', (req: Request, res: Response) =>{
    res.send("Asiakkaita");
});

router.post('/', (req: Request, res: Response) =>{
    const customer = new Customer({
        YTunnus: req.body.YTunnus,
        asiakkaanNimi: req.body.asiakkaanNimi,
        Postitusosoite: req.body.Postitusosoite,
        Postinumero: req.body.Postinumero,
        Toimipaikka: req.body.Toimipaikka
    });

    customer.save()
    .then(() =>{
        res.send('asiakas tallennettu!');
    })
    .catch((err: any) =>{
        res.json({message : err});
    })
});

module.exports = router;