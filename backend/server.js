import express from "express";
import data from "./Data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use('/api/seed', seedRouter);

app.use('/api/products',productRouter);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
