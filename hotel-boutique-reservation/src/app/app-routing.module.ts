import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { CatalogoHabitacionesComponent } from './catalogo-habitaciones/catalogo-habitaciones.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AuthGuard } from './auth.guard'; // Importa tu guard de autenticación
import { RegisterComponent } from './register/register.component';
import { HabitacionDetalleComponent } from './habitacion-detalle/habitacion-detalle.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'perfil', component: PerfilUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'catalogo', component: CatalogoHabitacionesComponent },
  { path: 'habitacion/:id', component: HabitacionDetalleComponent },
  { path: 'carrito', component: CarritoComprasComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdministradorComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
