import database from '../resources/database.json';

export interface ISensor {
    id: string,
    name: string,
    partNumber: number,
    communicationInterface: string,
    weight: number
}

export function getAllSensors(): ISensor[] {
    var sensors: ISensor[] = database.devices;
    sensors = sensors.map(sensor => {
        return sensor;
    });
    return sensors;
}

