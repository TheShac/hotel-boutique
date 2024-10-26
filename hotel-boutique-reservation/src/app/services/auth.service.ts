import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private userRole: string | null = null;

  constructor(private http: HttpClient) {}

  register(email: string, password: string, role: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, { email, password, role });
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        if (response && response.user && response.user.role) {
          this.userRole = response.user.role;
          if(this.userRole){
            localStorage.setItem('userRole', this.userRole);
          }
        }
      }),
      map(response => !!response.user),
      catchError(() => of(false))
    );
  }

  getRole(): string | null {
    if (!this.userRole) {
      this.userRole = localStorage.getItem('userRole');
    }
    return this.userRole;
  }

  isAuthenticated(): boolean {
    return !!this.getRole(); // Retorna true si hay un rol, indicando autenticación
  }

  logout() {
    this.userRole = null;
    localStorage.removeItem('userRole');
  }
}
