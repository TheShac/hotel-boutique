import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../models/habitacion';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
})
export class AdministradorComponent implements OnInit {
  habitacion: Habitacion = { id: 0, nombre: '', descripcion: '', precio: 0, disponible: true };
  habitaciones: Habitacion[] = [];

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.reservaService.getHabitaciones().subscribe(data => {
      this.habitaciones = data;
    });
  }

  guardarHabitacion() {
    if (this.habitacion.id === 0) {
      // Crear una nueva habitación
      this.habitacion.id = this.habitaciones.length + 1;
      this.habitaciones.push({ ...this.habitacion });
    }
    this.habitacion = { id: 0, nombre: '', descripcion: '', precio: 0, disponible: true };
  }

  eliminarHabitacion(id: number) {
    this.habitaciones = this.habitaciones.filter(h => h.id !== id);
  }
}
