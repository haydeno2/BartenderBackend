import express from "express"
import { order } from "../Models/order.model";

let app = express.Router();
let orderList:order[] = [];
let orderTracker:number = 1;

app.get("/", (req,res) =>{
    res.status(200).send(orderList);
})
app.post("/:drink", (req,res)=>{
    orderList.push(new order(orderTracker,req.params.drink));
    orderTracker++;
    res.status(200).send({message:"Order Placed"})
})