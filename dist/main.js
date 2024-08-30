"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_model_1 = require("./Models/order.model");
const cors = require('cors');
let app = (0, express_1.default)();
app.use(express_1.default.json(), cors());
let menu = ["water", "premium water", "Bud Ice the big one", "Mysterious and Malevolent liquid"];
let orderList = [];
let orderTracker = 1;
app.get("/", (req, res) => {
    res.send(menu);
});
app.get('/orders', (req, res) => {
    res.status(200).json(orderList);
});
app.post('/:drink', (req, res) => {
    orderList.push(new order_model_1.order(orderTracker, req.params.drink));
    orderTracker++;
    res.status(200).send({ message: 'Order Placed' });
});
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
//# sourceMappingURL=main.js.map