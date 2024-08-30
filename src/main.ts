import express from "express"
import { order } from "./Models/order.model";
const cors = require ('cors');
let app = express();
app.use(express.json(), cors());
let menu:string[] = ["water", "premium water", "Bud Ice the big one", "Mysterious and Malevolent liquid"]
let orderList: order[] = [];
let orderTracker: number = 1;
app.get("/", (req, res) => {
	res.send(menu);
});
app.get('/orders', (req, res) => {
	res.status(200).json(orderList);
  });
  
  app.post('/:drink', (req, res) => {
	orderList.push(new order(orderTracker, req.params.drink));
	orderTracker++;
	res.status(200).send({ message: 'Order Placed' });
  });
app.listen(3001, () => {
	console.log("Server is running on port 3001");
});
