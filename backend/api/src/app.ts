import express, { Application, NextFunction, Request, Response} from 'express';
import connect from './connect';
import * as CustomerController from './routes/customerRoutes';
import {PORT, DBURI} from './config/config';

const app: Application = express();
const db: string = DBURI;

const cors=require("cors");

const corsOptions ={

   origin:'*',

   credentials:true,            

   optionSuccessStatus:200,

}

app.use(cors(corsOptions));
// Connect to db
connect(db);
app.set("port", PORT);
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

// API endpoints
// ***************************************
// test can be removed
app.get('/test', (req, res)=> {
    res.json("Test");
});
// ***************************************
app.get("/customers", CustomerController.allCustomers);
app.get("/customer/:id", CustomerController.getCustomer);
app.post("/customer", CustomerController.addCustomer);
app.delete("/customer/:id", CustomerController.deleteCustomer);
app.patch ("/customer/:id", CustomerController.updateCustomer);

const server = app.listen(app.get("port"), () => {
    console.log("App running on port ", app.get("port"));

});