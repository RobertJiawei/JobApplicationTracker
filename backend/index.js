import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import applicationsRoute from "./routes/applicationsRoute.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: "../.env" });

const app = express();

app.use(express.json());
app.use(cors());
const __dirname = path.resolve();

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

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "frontend", "dist", "index.html"));
});
