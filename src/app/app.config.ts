import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';  // Permite el consumo de APIs externas

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(), 
    provideRouter(routes), // Enrutador principal de la aplicacion
    provideHttpClient() // Habilita la inyección de HttpClient en nuestros servicios
  ]
};