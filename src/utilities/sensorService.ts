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

export function getSensor(id: string): ISensor | undefined {
    var sensors: ISensor[] = database.devices;
    var sensor = sensors.find(sn => sn.id === id);
    return sensor;
}

