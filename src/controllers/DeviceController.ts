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

import DeviceModel from "../models/DeviceModel.js";
import UserModel from "../models/UserModel.js";

class DeviceController {
  constructor() {}

  getDevice = async (req: Request, res: Response) => {
    //TODO why I'm searching for the user again here?
    const user = await this.#userModel.findOneByUsername(req.body.username);
    const device = await this.#deviceModel.findAllByUserId(user?._id.toString());
    if (!device) {
      res.json({ message: "No devices found on provided username" });
      return;
    }
    res.json(device).end();
  };

  #deviceModel = new DeviceModel();
  #userModel = new UserModel();
}

export default DeviceController;
