import database from '../resources/database.json';
import { getCompatibleFirmwares, IFirmware } from './firmwareService';

export interface ISensor {
    id: string,
    name: string,
    partNumber: number,
    communicationInterface: string,
    weight: number,
    compatibleFirmwares?: IFirmware[]
}

export function getAllSensors(): ISensor[] {
    var sensors: ISensor[] = database.devices;
    sensors = sensors.map(sensor => {
        sensor.compatibleFirmwares = getCompatibleFirmwares(sensor.partNumber);
        return sensor;
    });
    return sensors;
}

