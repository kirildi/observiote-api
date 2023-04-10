import app from "./src/App.js";
import { Response, Request } from "express";
import mongoose from "mongoose";

const port = "3001";

app.get("/api", (req: Request, res: Response) => {
  return res.json({ message: "Hello World" });
});

mongoConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
async function mongoConnect() {
  const db = await mongoose.connect("mongodb://127.0.0.1:27017/observiote");
}
