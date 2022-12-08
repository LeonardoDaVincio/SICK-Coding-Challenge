import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firmware Compatibility Matcher';

  constructor(){
    
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: any): void {
    console.log("message received");
    console.log(event);
  }
}
