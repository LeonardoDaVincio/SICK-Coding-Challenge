import { Firmware } from "./firmware";

export interface Sensor {
    id: string;
    name: string;
    partNumber: number;
    communicationInterface: string;
    weight: number;
    compatibleFirmwares: Firmware[];
}
