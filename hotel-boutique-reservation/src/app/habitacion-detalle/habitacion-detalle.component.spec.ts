import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionDetalleComponent } from './habitacion-detalle.component';

describe('HabitacionDetalleComponent', () => {
  let component: HabitacionDetalleComponent;
  let fixture: ComponentFixture<HabitacionDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitacionDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitacionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
