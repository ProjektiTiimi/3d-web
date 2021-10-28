import {Express, Request, Response} from "express";
import Customer from '../models/customer'
import connect from './utils/connect'

function routes(app: Express){
    // GET customer
    // TODO: GET based on YTunnus
    app.get('/customer/:id', async (req: Request, res: Response) =>{
        const db = connect();
        const query = { _id: '${id}'};
        const result = Customer.find(query, (err: any, result: any) => {
            if (err) {
                res.send(err);
            }else {
                res.send(result);
            }
        });
    });

    // GET invoice
    app.get('/invoice/:id', (req: Request, res: Response) =>{
        res.status(200).send("GET invoice");
    
    });

    // POST invoice
    app.post('/invoice', (req: Request, res: Response) => {
        res.status(200).send("POST invoice");
   
    });

    // POST customer
    app.post('/customer', (req: Request, res: Response) => {
        const customer = new Customer({
            YTunnus: req.body.YTunnus,
            asiakkaanNimi: req.body.asiakkaanNimi,
            Postitusosoite: req.body.Postitusosoite,
            Postinumero: req.body.Postinumero,
            Toimipaikka: req.body.Toimipaikka
        });
        
        customer.save()
        .then(() =>{
            res.send('Asiakas tallennettu!');
        })
        .catch((err: any) =>{
            res.json({message : err});
        })
    });

    // DELETE customer
    app.delete('/customer/:id', (req: Request, res: Response)=> {
        Customer.deleteOne({_id: req.params.id}, (err:any)=>{
            if (err){
                res.send(err);
            }else {
                res.status(200).send("Deleted");
            }
        })
    })
}

export default routes