"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_model_1 = require("../Models/order.model");
let app = express_1.default.Router();
let orderList = [];
let orderTracker = 1;
app.get("/", (req, res) => {
    res.status(200).send(orderList);
});
app.post("/:drink", (req, res) => {
    orderList.push(new order_model_1.order(orderTracker, req.params.drink));
    orderTracker++;
    res.status(200).send({ message: "Order Placed" });
});
//# sourceMappingURL=orders.route.js.map