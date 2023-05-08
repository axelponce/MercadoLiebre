const path = require("path");
const express = require("express");
const app = express();

app.get("/home", (req, res) => {
	res.sendFile(path.join(__dirname, "./views/home.html"));
});
app.get("/register", (req, res) => {
	res.sendFile(path.join(__dirname, "./views/registro.html"));
});

app.use("/public", express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Servidor corriendo en el puerto ${port}"));
