import { Component } from '@angular/core';
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
    this.sensors = this.sensorService.getSensorsV2();
  }

  onSelect(sensor: Sensor): void {
    this.selectedSensor = sensor;
  } 

}
