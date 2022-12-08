import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmwareListeComponent } from './firmware-liste.component';

describe('FirmwareListeComponent', () => {
  let component: FirmwareListeComponent;
  let fixture: ComponentFixture<FirmwareListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirmwareListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirmwareListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
