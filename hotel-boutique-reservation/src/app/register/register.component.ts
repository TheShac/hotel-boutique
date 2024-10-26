import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  role: string = 'client'; // Por defecto, rol 'client'

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.email, this.password, this.role).subscribe(
      (response) => {
        alert('Usuario registrado con éxito');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Error al registrar usuario');
        console.error(error);
      }
    );
  }
}

