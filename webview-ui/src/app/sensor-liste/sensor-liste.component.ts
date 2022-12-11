import { Component, HostListener } from '@angular/core';
import { Sensor } from '../sensor';
import { SensorService } from '../sensor.service';

@Component({
  selector: 'app-sensor-liste',
  templateUrl: './sensor-liste.component.html',
  styleUrls: ['./sensor-liste.component.css']
})
export class SensorListeComponent {

  sensors: Sensor[] = [];
  selectedSensor?: Sensor;

  constructor(private sensorService: SensorService) {}

  ngOnInit(): void {
    this.sensorService.getSensorsV2();
  }

  onSelect(sensor: Sensor): void {
    this.selectedSensor = sensor;
  } 

  @HostListener('window:message', ['$event'])
  onMessage(event: any): void {
    console.log("Sensor Liste received Message");
    if (event.data.message === "getAllSensors") {
      console.log("Sensor Liste received all sensors");
      console.log(event.data.sensors);
      this.sensors = event.data.sensors;
    } 
  }

}
