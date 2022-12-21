const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const apuestasRoutes = require("./routes/apuestas");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use("/api",apuestasRoutes);

//routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

//MongoDb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a mongo atlas");
  })
  .catch((error) => {
    console.log(error);
  });

//Port
app.listen(port, () => {
  console.log(`Servicio ejecutado en el puerto:${port}`);
});
