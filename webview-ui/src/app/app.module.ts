
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SensorListeComponent } from './sensor-liste/sensor-liste.component';
import { SensorDetailComponent } from './sensor-detail/sensor-detail.component';
import { FirmwareListeComponent } from './firmware-liste/firmware-liste.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorListeComponent,
    SensorDetailComponent,
    FirmwareListeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

