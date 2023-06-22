import { Schema } from "mongoose";
import { SensorTypeInterface } from "../interfaces/SensorTypeInterface.js";

export const sensorTypeSchema = new Schema<SensorTypeInterface>({
  sensorTypeId: { type: String, required: true },
  sensorTypeName: { type: String, required: true },
});
