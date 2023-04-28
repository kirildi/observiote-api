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

import UserModel from "../models/UserModel.js";
import { Response, Request } from "express";

class LoginController {
  constructor() {}

  login = async (req: Request, res: Response) => {
    const user = await this.#userModel.findOneByUsername(req.body.username);

    if (!user) {
      res.json({ message: "Wrong username" });
      return;
    }

    const isPasswordMatch = await this.#userModel.comparePassword(req.body.password, user.userPassword);

    if (!isPasswordMatch) {
      res.json({ message: "Wrong password" });
      return;
    }
    res.json({ message: "USER true" });
  };

  #userModel = new UserModel();
}

export default LoginController;
