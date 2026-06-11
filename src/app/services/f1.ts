import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class F1 {

  private http = inject(HttpClient);
  private apiUrl = 'https://f1api.dev/api/drivers';

  buscarPilotos(termino: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?q=${termino}`);
  }

  obtenerGrillaActual(): Observable<any> {
    return this.http.get(`${this.apiUrl}/current`);
  }
}