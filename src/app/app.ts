import { Component, signal } from '@angular/core';
import { Buscador } from './components/buscador/buscador';

@Component({
  selector: 'app-root',
  imports: [Buscador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('F1-Parcial');
}