import { Request, Response } from "express";
import Customer from "../models/customer";

// Returns ALL customers at once
export const allCustomers = (req: Request, res: Response) => {
    const result = Customer.find((err: any, result: any)=> {
        if (err){
            res.send(err);
        } else{
            res.status(200).send(result);
        }
    })
}

// Get single customer by _id
export const getCustomer = (req: Request, res: Response) => {
    const result = Customer.findById(req.params.id, (err: any, result: any) => {
        if (err) {
          res.send(err);
        } else {
          res.status(200).send(result);
        }
      });
}

// Add new customer
export const addCustomer = (req: Request, res: Response) => {
    const result = new Customer(req.body);
    result.save((err: any, result: any) => {
        if (err){
            res.send(err);
        }else {
            res.status(200).send(result);
        }
    })
}

// Update customer
export const updateCustomer = (req: Request, res: Response) => {
    let customer = Customer.findByIdAndUpdate(req.params.id, req.body, (err: any, customer: any)=> {
        if (err){
            res.send(err);
        }else {
            res.status(200).send(customer);
        }
    })
}

// Delete customer
export const deleteCustomer = (req: Request, res: Response) => {
    const customer = Customer.findOneAndDelete({_id: req.params.id}, (err: any) => {
        if (err){
            res.status(500).end();
        }else{
            Customer.deleteOne({_id: req.params.id});
            if (err){
                res.status(500).end();
            } else{
                res.status(200).end();
            }
        }
    });

}