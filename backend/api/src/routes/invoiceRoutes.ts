import { Request, Response } from "express";
import Invoice from "../models/invoice";

// Add invoice
export const addInvoice = (req: Request, res: Response) => {
    const result = new Invoice(req.body);
    result.save((err: any, result: any) => {
        if (err){
            res.send(err);
        }else {
            res.status(200).send(result);
        }
    })
}

// Returns ALL invoices at once
export const allInvoices = (req: Request, res: Response) => {
    const result = Invoice.find((err: any, result: any)=> {
        if (err){
            res.send(err);
        } else{
            res.status(200).send(result);
        }
    })
}

