import { ApiEndpointInterface } from "./interfaces/api/ApiEndpointInterface.js";
import * as dotenv from "dotenv";

dotenv.config();
export const HOST_URL = process.env.NODE_ENV === "production" ? (process.env.OIOTE_API_HOST as string) : "localhost";
export const HOST_PORT = parseInt(process.env.OIOTE_API_PORT ?? "", 10);
export const API_BASE = process.env.OIOTE_API_BASE_ENDPOINT as string;

export const endpoint: ApiEndpointInterface = {
  loginEndpoint: "auth_service",
  deviceEndpoint: "device_service",
  sensorEndpoint: "sensor_service",
};
