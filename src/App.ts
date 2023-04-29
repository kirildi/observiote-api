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

import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { API_BASE, endpoint } from "../src/config.js";
import LoginRoute from "../src/routes/LoginRoute.js";
import DeviceRoute from "./routes/DeviceRoute.js";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.#setRoutes();
  }

  #setRoutes() {
    const loginRoute = new LoginRoute();
    const deviceRoute = new DeviceRoute();
    this.app.use(API_BASE + endpoint.loginEndpoint, loginRoute.router);
    this.app.use(API_BASE + endpoint.deviceEndpoint, deviceRoute.router);
  }

  private setConfig() {
    // Allow to receive requests with data in json format
    this.app.use(bodyParser.json({ limit: "50mb" }));
    // Allow to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    // Enables cors
    this.app.use(cors());
  }
}
export default new App().app;
