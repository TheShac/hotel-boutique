import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habitacion } from '../models/habitacion';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  // Definir un conjunto de habitaciones disponibles para el hotel
  private habitaciones: Habitacion[] = [
    { id: 1, nombre: 'Suite Deluxe', descripcion: 'Habitación de lujo con vista al mar', precio: 200, disponible: true },
    { id: 2, nombre: 'Habitación Estándar', descripcion: 'Habitación cómoda y económica', precio: 100, disponible: true },
    // Puedes agregar más habitaciones aquí...
  ];

  // Obtener la lista de habitaciones disponibles
  getHabitaciones(): Observable<Habitacion[]> {
    return of(this.habitaciones);
  }

  // Realizar una reserva para una habitación específica
  realizarReserva(habitacionId: number): Observable<boolean> {
    const habitacion = this.habitaciones.find(h => h.id === habitacionId);
    if (habitacion && habitacion.disponible) {
      // Marca la habitación como no disponible después de la reserva
      habitacion.disponible = false;
      return of(true); // La reserva fue exitosa
    }
    return of(false); // La habitación ya estaba reservada
  }
}
