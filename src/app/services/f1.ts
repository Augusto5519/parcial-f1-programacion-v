import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class F1 {
  private http = inject(HttpClient);
  
  // Ahora la URL viene del environment
  private apiUrl = environment.apiUrl;

  buscarPilotos(termino: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?q=${termino}`);
  }

  obtenerGrillaActual(): Observable<any> {
    return this.http.get(`${this.apiUrl}/current`);
  }
}