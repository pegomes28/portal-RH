import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:3001/usuarios'; // mesma porta do json-server

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.baseUrl}?email=${email}&senha=${senha}`
    );
  }
}
