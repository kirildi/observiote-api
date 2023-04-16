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
import { RoleInterface } from "../interfaces/RoleInterface.js";

const roleSchema = new Schema<RoleInterface>({
  roleId: { type: String, required: true },
  roleName: { type: String, required: true },
});

class RoleModel {
  constructor() {
    model<RoleInterface>("Role", roleSchema);
  }
}

export default RoleModel;
