import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import applicationsRoute from "./routes/applicationsRoute.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const app = express();

app.use(express.json());
app.use(cors());

app.use("/applications", applicationsRoute);
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
