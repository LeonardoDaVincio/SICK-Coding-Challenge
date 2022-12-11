import { Component, HostListener, Input } from '@angular/core';
import { Sensor } from '../sensor';
import { Firmware } from '../firmware';
import { SensorService } from '../sensor.service';
import { FirmwareService } from '../firmware.service';

@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.css']
})
export class SensorDetailComponent {

  @Input() sensor?: Sensor;
  imageUri?: string;
  firmwares?: Firmware[];

  constructor(private sensorService: SensorService, private firmwareService: FirmwareService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if(this.sensor){
      console.log("Sensor Detail changed, fetching image");
      this.firmwareService.getCompatibleFirmwares(this.sensor.partNumber);
      this.sensorService.getImageForSensor(this.sensor.id);
    }
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: any): void {
    console.log("Sensor Detail received Message");
    if (event.data.message === "getImageForSensor") {
      console.log(event.data);
      this.imageUri = event.data.imageUri;
    } else if (event.data.message === "getCompatibleFirmwares") {
      console.log(event.data);
      this.firmwares = event.data.firmwares;
    }
    
  }
}
