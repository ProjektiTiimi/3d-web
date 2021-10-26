import {Express, Request, Response} from "express";

function routes(app: Express){
    app.get('/healthcheck', (req: Request, res: Response) => {
        res.sendStatus(200);
    });

    // GET customer
    app.get('/customer/:id', (req: Request, res: Response) =>{
        res.status(200).send("GET customer");

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
        res.status(200).send("POST customer");
    });
}

export default routes