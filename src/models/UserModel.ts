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
import { model, Model } from "mongoose";
import { UserInterface } from "../interfaces/UserInterface.js";
import { userSchema } from "../schemas/UserSchema.js";

class UserModel {
  constructor() {
    this.#userModel = model<UserInterface>("User", userSchema);
  }

  findOneByUsername = (userName: string): Promise<UserInterface | null> => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.#userModel.findOne({ userName }).exec();
        resolve(response);
      } catch (error: any) {
        reject(error);
      }
    });
  };

  comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return password === hashedPassword ? true : false;
    // return await bcrypt.compare(password, hashedPassword); //TODO add bcrypt check
  };

  readonly #userModel: Model<UserInterface>;
}

export default UserModel;
