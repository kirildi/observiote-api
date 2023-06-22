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
import { SensorInterface } from "../interfaces/SensorInterface.js";
import { SensorTypeInterface } from "../interfaces/SensorTypeInterface.js";
import { sensorSchema } from "../schemas/SensorSchema.js";
import { sensorTypeSchema } from "../schemas/SensorTypeSchema.js";

class SensorModel {
  constructor() {
    this.#sensorModel = model<SensorInterface>("Sensor", sensorSchema);
    this.#sensorTypeModel = model<SensorTypeInterface>("SensorType", sensorTypeSchema, "sensor_types");
  }
  findAllByDeviceId = (devId: string | number): Promise<Array<SensorInterface>> => {
    return new Promise(async (resolve, reject) => {
      try {
        let allSensorsByDeviceId = await this.#sensorModel.find({ deviceId: devId }).exec();

        const populatedSensors = await Promise.all(
          allSensorsByDeviceId.map(async (sensor) => {
            const sensorType = await this.#sensorTypeModel.findOne({ sensorTypeId: sensor.sensorTypeId });
            const populatedSensor: SensorInterface = {
              ...sensor.toObject(), //TODO this is a type of conversion need investigation and fixing if possible
              sensorTypeId: sensorType ? sensorType.toObject() : sensor.sensorTypeId,
            };
            return populatedSensor;
          })
        );
        console.log(populatedSensors);

        resolve(populatedSensors);
      } catch (error: any) {
        reject(error);
      }
    });
  };
  readonly #sensorModel: Model<SensorInterface>;
  readonly #sensorTypeModel: Model<SensorTypeInterface>;
}

export default SensorModel;
