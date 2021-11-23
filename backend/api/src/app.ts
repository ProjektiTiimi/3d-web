import express, { Application} from 'express';
import connect from './connect';
import * as CustomerController from './routes/customerRoutes';
import * as UserController from './routes/userRoutes';
import * as InvoiceController from './routes/invoiceRoutes';
import authJwt from './controllers/authController'
import {PORT, DBURI} from './config/config';
import path from 'path/posix';
import { verify } from 'crypto';

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
// Customer endpoints
app.get("/customers", [authJwt.verifyToken], CustomerController.allCustomers);
app.get("/customer/:id", [authJwt.verifyToken], CustomerController.getCustomer);
app.post("/customer", [authJwt.verifyToken], CustomerController.addCustomer);
app.delete("/customer/:id", [authJwt.verifyToken], CustomerController.deleteCustomer);
app.patch ("/customer/:id", [authJwt.verifyToken], CustomerController.updateCustomer);
// User endpoints
app.post("/user/register", UserController.registerUser);
app.post("/user/login", UserController.authenticateUser);
app.delete("/user/:id", [authJwt.verifyToken], UserController.deleteUser);
app.get("/user/:id", [authJwt.verifyToken], UserController.getUser);
//Invoice endpoints
app.post("/invoice", [authJwt.verifyToken], InvoiceController.addInvoice);
app.get("/invoice", [authJwt.verifyToken], InvoiceController.allInvoices);

const server = app.listen(app.get("port"), () => {
    console.log("App running on port ", app.get("port"));

});