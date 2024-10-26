import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-habitacion-detalle',
  templateUrl: './habitacion-detalle.component.html',
  styleUrls: ['./habitacion-detalle.component.css']
})
export class HabitacionDetalleComponent implements OnInit {
  habitacion: any;

  habitaciones = [
    {
      id: 1,
      nombre: 'Habitación Estandar',
      descripcion: 'Amplia habitación ideal para familias.',
      precio: 120,
      disponibilidad: 5,
      imagenUrl: 'https://www.ahstatic.com/photos/b5w1_rodbcovz_00_p_1024x768.jpg' ,
      fotos: [
        'https://www.ahstatic.com/photos/b5w1_rodbcovz_03_p_1024x768.jpg',
        'https://www.ahstatic.com/photos/b5w1_rodbcovz_04_p_1024x768.jpg',
        'https://www.ahstatic.com/photos/b5w1_rodbcovz_05_p_1024x768.jpg' ,
      ]
    },
    {
      id: 2,
      nombre: 'Habitación Twin',
      descripcion: 'Amplia habitación ideal para familias.',
      precio: 80,
      disponibilidad: 2,
      imagenUrl: 'https://www.ahstatic.com/photos/b5w1_rod3cov_00_p_1024x768.jpg',
      fotos: [
        'https://www.ahstatic.com/photos/b5w1_rod3cov_01_p_1024x768.jpg',
        'https://www.ahstatic.com/photos/b5w1_rod3cov_02_p_1024x768.jpg',

      ]
    },
    {
      id: 3,
      nombre: 'Habitación Superior',
      descripcion: 'Amplia habitación ideal para familias.',
      precio: 80,
      disponibilidad: 2,
      imagenUrl: 'https://www.ahstatic.com/photos/b5w1_rodbbofz_00_p_1024x768.jpg',
      fotos: [
        'https://www.ahstatic.com/photos/b5w1_rodbbofz_01_p_1024x768.jpg',
        'https://www.ahstatic.com/photos/b5w1_rodbbofz_02_p_1024x768.jpg',

      ]
    },
    {
      id: 4,
      nombre: 'Habitación Ejecutiva',
      descripcion: 'Habitación con vista panorámica y baño privado.',
      precio: 120,
      disponibilidad: 1,
      imagenUrl: 'https://www.ahstatic.com/photos/b5w1_rodbaofz_00_p_1024x768.jpg',
      fotos: [
        'https://www.ahstatic.com/photos/b5w1_rodbaofz_01_p_1024x768.jpg',
        'https://www.ahstatic.com/photos/b5w1_rodbaofz_02_p_1024x768.jpg',
        'https://www.ahstatic.com/photos/b5w1_rodbaofz_03_p_1024x768.jpg',

      ]
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {} // Inyecta Router

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.habitacion = this.habitaciones.find(h => h.id === id);

    if (!this.habitacion) {
      console.error('Habitación no encontrada');
    }
  }

  reservarHabitacion() {
    if (this.habitacion && this.habitacion.disponibilidad > 0) {
      console.log(`Reservando habitación: ${this.habitacion.nombre}`);
    } else {
      console.log('No hay disponibilidad para reservar esta habitación');
    }
  }

  volverAlCatalogo() {
    this.router.navigate(['/catalogo']); // Redirige al catálogo
  }
}
