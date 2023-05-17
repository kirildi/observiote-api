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
import { Schema, model, Model } from "mongoose";
import { DeviceInterface } from "../interfaces/DeviceInterface.js";

const deviceSchema = new Schema<DeviceInterface>({
  deviceId: { type: String, required: true },
  deviceName: { type: String, required: true },
  deviceImage: { type: String, required: true },
  deviceHash: { type: String, required: true },
  deviceDescription: { type: String, required: true },
  deviceCoordinates: { type: String, required: true },
  deviceCrateDate: { type: String, required: true },
  deviceLastModifyDate: { type: String, required: true },
  userName: { type: String, required: true },
});

class DeviceModel {
  constructor() {
    this.#deviceModel = model<DeviceInterface>("Device", deviceSchema);
  }
  findAllByUserName = (userName: string): Promise<Array<DeviceInterface>> => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.#deviceModel.find({ userName }).exec();
        resolve(response);
      } catch (error: any) {
        reject(error);
      }
    });
  };

  readonly #deviceModel: Model<DeviceInterface>;
}

export default DeviceModel;
