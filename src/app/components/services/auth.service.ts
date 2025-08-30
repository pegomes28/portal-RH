import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, senha: string): Observable<any[]> {
    // Simulação de login
    if (email === 'teste@teste.com' && senha === '123456') {
      return of([{ email }]);
    }
    return of([]);
  }

  registrar(email: string, senha: string): Observable<any> {
    // Simulação de registro
    return of({ email });
  }
}