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

import { Request, Response } from "express";
import SensorModel from "../models/SensorModel.js";

class SensorController {
  constructor() {}

  getSensorData = async (req: Request, res: Response) => {
    const sensorData = await this.#sensorModel.findAllByUserId(req.body.username);
    if (!sensorData) {
      res.json({ message: "No sensor data on this device" });
      return;
    }
    res.json(sensorData).end();
  };

  #sensorModel = new SensorModel();
}

export default SensorController;
