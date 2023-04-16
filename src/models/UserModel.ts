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
import { Schema, model } from "mongoose";
import { UserInterface } from "../interfaces/UserInterface.js";

const userSchema = new Schema<UserInterface>({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  userPassword: { type: String, required: true },
  userLogin: { type: Boolean, required: true },
});

class UserModel {
  constructor() {
    model<UserInterface>("User", userSchema);
  }
}

export default UserModel;
