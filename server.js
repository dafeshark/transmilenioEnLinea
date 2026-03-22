require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.static("."));

app.get("/api-key", (req, res) => {
    res.send(process.env.API_KEY);
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});