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
  imageUri?: string;

  constructor(private sensorService: SensorService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if(this.sensor){
      console.log("Sensor Detail changed, fetching image");
      this.sensorService.getSensor(this.sensor.id);
      this.sensorService.getImageForSensor(this.sensor.id);
    }
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: any): void {
    console.log("Sensor Detail received Message");
    if (event.data.message === "getImageForSensor") {
      console.log(event.data);
      this.imageUri = event.data.imageUri;
    } 
    
  }
}
