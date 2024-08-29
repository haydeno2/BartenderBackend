import express from "express"
let app = express();
app.use(express.json());
let menu:string[] = ["water", "premium water", "Bud Ice the big one", "Mysterious and Malevolent liquid"]

app.get("/", (req, res) => {
	res.send(menu);
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
