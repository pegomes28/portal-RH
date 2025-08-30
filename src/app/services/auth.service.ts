import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, senha: string): Observable<any[]> {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const user = usuarios.find((u: any) => u.email === email && u.senha === senha);
    return of(user ? [user] : []);
  }

  registrar(email: string, senha: string): Observable<any> {
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    if (usuarios.find((u: any) => u.email === email)) {
      // Já existe usuário com esse email
      return of(null);
    }
    const novoUsuario = { email, senha };
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return of(novoUsuario);
  }
}