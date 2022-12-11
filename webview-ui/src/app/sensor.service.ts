import { Injectable } from '@angular/core';
import { Sensor } from './sensor';
import { WebviewCommunicationService } from './webview-communication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private webviewCommunication: WebviewCommunicationService) { }

  /*getSensors(): Sensor[] {
    const sensor1: Sensor = {
      id: "s1",
      name: "sensor 1",
      partNumber: 1,
      communicationInterface: "USB",
      weight: 100
    };
    const sensor2: Sensor = {
      id: "s2",
      name: "sensor 2",
      partNumber: 2,
      communicationInterface: "ETH",
      weight: 200
    };

    return [sensor1, sensor2];
  }*/

  getSensorsV2(): void {
    console.log("Fetching sensors");
    this.webviewCommunication.postMessage({command: "getAllSensors"});
  }

  getSensor(id: string): void {
    console.log("Fetching sensor: ", id);
    this.webviewCommunication.postMessage({command: "getSensor", id: id});
  }

  getImageForSensor(id: string): void {
    console.log("Fetching image for: ", id);
    this.webviewCommunication.postMessage({command: "getImageForSensor", id: id});
  }
}
