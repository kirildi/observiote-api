/*
    Observiote-API Application
    Copyright (C) 2023 Kiril Ivanov

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
 */
import app from "./src/App.js";
import mongoose from "mongoose";
import { HOST_URL, HOST_PORT, API_BASE } from "./src/config.js";

mongoConnect()
  .then(() => {
    app.listen(HOST_PORT, HOST_URL, () => {});
  })
  .catch((err) => console.log(err));

async function mongoConnect() {
  const db = await mongoose.connect("mongodb://127.0.0.1:27017/observiote");
}
