import { Component, Input } from '@angular/core';
import { Firmware } from '../firmware';

@Component({
  selector: 'app-firmware-liste',
  templateUrl: './firmware-liste.component.html',
  styleUrls: ['./firmware-liste.component.css']
})
export class FirmwareListeComponent {

  @Input() firmwares?: Firmware[];

}
