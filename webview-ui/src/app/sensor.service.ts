import { Injectable } from '@angular/core';
import { Sensor } from './sensor';
import { WebviewCommunicationService } from './webview-communication.service';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private webviewCommunication: WebviewCommunicationService) { }

  getSensors(): Sensor[] {
    const sensor1: Sensor = {
      id: "s1",
      name: "sensor 1",
      partNumber: 1,
      communicationInterface: "USB",
      wheight: 100
    };
    const sensor2: Sensor = {
      id: "s2",
      name: "sensor 2",
      partNumber: 2,
      communicationInterface: "ETH",
      wheight: 200
    };

    return [sensor1, sensor2];
  }

  getSensorsV2(): Sensor[] {
    console.log("Fetching sensors");
    this.webviewCommunication.postMessage({command: "getAllSensors"});
    return this.getSensors();
  }
}
