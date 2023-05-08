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
import { SensorTypeInterface } from "../interfaces/SensorTypeInterface.js";
import { resolve } from "path";

const sensorTypeSchema = new Schema<SensorTypeInterface>({
  sensorTypeId: { type: String, required: true },
  sensorTypeName: { type: String, required: true },
});

class SensorTypeModel {
  constructor() {
    this.#sensorTypeModel = model<SensorTypeInterface>("SensorType", sensorTypeSchema);
  }

  findBySensorTypeName = (sensorTypeName: string): Promise<SensorTypeInterface | null> => {
    return new Promise(async (resolve, reject) => {
      try {
        let findName = { sensorTypeName: sensorTypeName };
        const response = await this.#sensorTypeModel.findOne(findName).exec();
        resolve(response !== null ? response : null);
      } catch (error: any) {
        reject(error);
      }
    });
  };
  readonly #sensorTypeModel: Model<SensorTypeInterface>;
}

export default SensorTypeModel;
