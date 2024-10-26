import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo-habitaciones',
  templateUrl: './catalogo-habitaciones.component.html',
  styleUrls: ['./catalogo-habitaciones.component.css']
})

export class CatalogoHabitacionesComponent {
  
  habitaciones: {
    id: number;
    nombre: string;
    precio: number;
    Disponibilidad: number;
    imagenUrl: string;
  }[];

  desplazamiento: number = 0;
  anchoTarjeta: number = 320;
  indexActual: number = 0;

  constructor(private router: Router) {
    this.habitaciones = [
      {
        id: 1,
        nombre: 'Habitación Estandar',
        precio: 89990,
        Disponibilidad: 5,
        imagenUrl: 'https://www.ahstatic.com/photos/b5w1_rodbcovz_00_p_1024x768.jpg'
      },
      {
        id: 2,
        nombre: 'Habitación Twin',
        precio: 119990,
        Disponibilidad: 5,
        imagenUrl: 'https://www.ahstatic.com/photos/b5w1_rod3cov_00_p_1024x768.jpg'
      },
      {
        id: 3,
        nombre: 'Habitación Superior',
        precio: 159990,
        Disponibilidad: 5,
        imagenUrl: 'https://www.ahstatic.com/photos/b5w1_rodbbofz_00_p_1024x768.jpg'
      },
      {
        id: 4,
        nombre: 'Habitación Ejecutiva',
        precio: 129990,
        Disponibilidad: 5,
        imagenUrl: 'https://www.ahstatic.com/photos/b5w1_rodbaofz_00_p_1024x768.jpg'
      },
  
    ];
  }

  agregarAlCarrito(habitacion: any) {
    if (habitacion.cantidadDisponible > 0) {
      console.log(`Habitación ${habitacion.nombre} añadida al carrito.`);
      habitacion.cantidadDisponible--; 
    } else {
      console.log(`Habitación ${habitacion.nombre} no está disponible.`);
    }
  }

  irADetalle(id: number) {
    this.router.navigate(['/habitacion', id]);
  }

  desplazarIzquierda() {
    this.indexActual--;

    if (this.indexActual < 0) {
      this.indexActual = this.habitaciones.length - 1; // Vuelve a la última habitación
    }

    this.desplazamiento = this.indexActual * this.anchoTarjeta; // Actualiza el desplazamiento
  }

  desplazarDerecha() {
    this.indexActual++;

    if (this.indexActual >= this.habitaciones.length) {
      this.indexActual = 0; // Vuelve a la primera habitación
    }

    this.desplazamiento = this.indexActual * this.anchoTarjeta; // Actualiza el desplazamiento
  }
}
