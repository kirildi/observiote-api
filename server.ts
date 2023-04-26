import app from "./src/App.js";
import { Response, Request } from "express";
import mongoose from "mongoose";
import { HOST_URL, HOST_PORT, API_BASE } from "./src/config.js";

app.get(API_BASE, (req: Request, res: Response) => {
  return res.json({ message: "Hello World" });
});

mongoConnect()
  .then(() => {
    app.listen(HOST_PORT, HOST_URL, () => {});
  })
  .catch((err) => console.log(err));

async function mongoConnect() {
  const db = await mongoose.connect("mongodb://127.0.0.1:27017/observiote");
}
