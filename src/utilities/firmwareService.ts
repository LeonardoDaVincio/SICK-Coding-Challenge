import database from '../resources/database.json';

export interface IFirmware {
    version: string;
    downloadUrl: string;
    compatiblePartNumbers: number[];
}

export function getCompatibleFirmwares(partNumber: number) {
    const firmwares: IFirmware[] = database.firmware;
    return firmwares.filter( firmware => firmware.compatiblePartNumbers.includes(partNumber));
}

