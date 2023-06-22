import { Schema } from "mongoose";
import { SensorInterface } from "../interfaces/SensorInterface.js";

export const sensorSchema = new Schema<SensorInterface>({
  sensorId: { type: String, required: true },
  sensorTypeId: { type: String, required: true },
  sensorDescription: { type: String, required: true },
  sensorCoordinates: { type: String, required: true },
  sensorCoordinatesRange: { type: String, required: true },
  deviceId: { type: String, required: true },
});
