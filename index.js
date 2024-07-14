const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/products", productRoute);


mongoose
  .connect(
    "mongodb+srv://anandjaiswaliitg:imvbtO26u8vdXsqg@backenddb.tkbshur.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
