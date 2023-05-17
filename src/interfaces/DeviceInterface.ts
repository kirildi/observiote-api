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

export interface DeviceInterface {
  deviceId: string;
  deviceName: string;
  deviceImage: string;
  deviceHash: string;
  deviceDescription: string;
  deviceCoordinates: string;
  deviceCrateDate: string;
  deviceLastModifyDate: string;
  userName: string;
}
