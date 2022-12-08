import { Component, Input } from '@angular/core';
import { Sensor } from '../sensor';
import { Firmware } from '../firmware';
import { FirmwareService } from '../firmware.service';

@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.css']
})
export class SensorDetailComponent {

  @Input() sensor?: Sensor;

  firmwares?: Firmware[];

  constructor(private firmwareService: FirmwareService) {}

  ngOnInit(): void {
    if(this.sensor) {
      this.firmwares = this.firmwareService.getCompatibleFirmwares(this.sensor);
    }
  }

}
