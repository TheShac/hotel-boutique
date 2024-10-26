import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        const role = this.authService.getRole();
        this.router.navigate([role === 'admin' ? '/admin' : '/perfil']);
      } else {
        alert('Credenciales incorrectas');
      }
    });
  }
}
