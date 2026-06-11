import { Component, signal } from '@angular/core';
import { Buscador } from './components/buscador/buscador'; // Importamos el componente principal

@Component({
  selector: 'app-root',
  imports: [Buscador],   // Importamos el buscador para que sea lo primero que se muestre en la pantalla
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('F1-Parcial');
}