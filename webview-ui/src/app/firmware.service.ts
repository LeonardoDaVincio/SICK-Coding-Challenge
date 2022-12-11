import { Injectable } from '@angular/core';
import { Firmware } from './firmware';
import { Sensor } from './sensor';
import { WebviewCommunicationService } from './webview-communication.service';

@Injectable({
  providedIn: 'root'
})
export class FirmwareService {

  constructor(private webviewCommunicationService: WebviewCommunicationService) { }

  getCompatibleFirmwares(partNumber: number): void {
    console.log("Fetching firmwares for: ", partNumber);
    this.webviewCommunicationService.postMessage({command: "getCompatibleFirmwares", partNumber: partNumber});
  }
}
