import { Component, HostListener, Input } from '@angular/core';
import { Sensor } from '../sensor';
import { Firmware } from '../firmware';
import { SensorService } from '../sensor.service';

@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.css']
})
export class SensorDetailComponent {

  @Input() sensor?: Sensor;

  constructor(private sensorService: SensorService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log(this.sensor?.compatibleFirmwares);
  }
}
