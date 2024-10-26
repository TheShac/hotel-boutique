import { Component } from '@angular/core';
import { Habitacion } from '../models/habitacion';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
})
export class CarritoComprasComponent {
  carrito: { habitacion: Habitacion }[] = [];

  constructor(private reservaService: ReservaService) {}

  // Método para calcular el total del carrito
  calcularTotal(): number {
    return this.carrito.reduce((total, item) => total + item.habitacion.precio, 0);
  }

  // Método para finalizar la compra
  finalizarCompra() {
    alert('Compra finalizada con éxito');
    this.carrito = []; // Vaciar el carrito después de la compra
  }
}
