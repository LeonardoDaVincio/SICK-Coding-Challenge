import { Injectable } from '@angular/core';
import { WebviewCommunicationService } from './webview-communication.service';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private webviewCommunication: WebviewCommunicationService) { }

  getSensorsV2(): void {
    console.log("Fetching sensors");
    this.webviewCommunication.postMessage({command: "getAllSensors"});
  }

  getImageForSensor(id: string): void {
    console.log("Fetching image for: ", id);
    this.webviewCommunication.postMessage({command: "getImageForSensor", id: id});
  }
}
