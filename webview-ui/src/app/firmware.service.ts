import { Injectable } from '@angular/core';
import { Firmware } from './firmware';
import { Sensor } from './sensor';
import { WebviewCommunicationService } from './webview-communication.service';

@Injectable({
  providedIn: 'root'
})
export class FirmwareService {

  constructor() { }

  getCompatibleFirmwares(sensor: Sensor): Firmware[] {
    const f1: Firmware = {
      version: "1.0",
      downloadUrl: "bla"
    };
    const f2: Firmware = {
      version: "2.0",
      downloadUrl: "bla"
    };

    return [f1, f2];
  }
}
