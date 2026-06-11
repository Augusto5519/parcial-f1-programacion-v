import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F1 } from '../../services/f1';
import { HlmCardImports } from '../../../../spartan/card/src';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [
    CommonModule,
    HlmCardImports
  ],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css'
})
export class Buscador {
  private f1Service = inject(F1);
  
  pilotos = signal<any[]>([]);
  cargando = signal<boolean>(false); 
  ordenAscendente = signal<boolean>(true);
  grilla = signal<any[]>([]);

  realizarBusqueda(termino: string) {
    if (!termino) return;
    
    this.cargando.set(true);
    this.pilotos.set([]);
    this.grilla.set([]);
    this.ordenAscendente.set(true);

    this.f1Service.buscarPilotos(termino).subscribe({
      next: (datos) => {
        const pilotosOrdenados = datos.drivers.sort((a: any, b: any) => 
          a.name.localeCompare(b.name)
        );
        this.pilotos.set(pilotosOrdenados);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Hubo un error en la búsqueda:', err);
        this.pilotos.set([]);
        this.cargando.set(false);
      }
    });
  }

  limpiarBusqueda(input: HTMLInputElement) {
    input.value = ''; 
    this.pilotos.set([]); 
    this.grilla.set([]);
    this.cargando.set(false); 
  }

  alternarOrden() {
    this.ordenAscendente.set(!this.ordenAscendente());
    const pilotosActuales = [...this.pilotos()];
    
    pilotosActuales.sort((a, b) => {
      if (this.ordenAscendente()) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    this.pilotos.set(pilotosActuales);
  }

  cargarGrilla() {
    this.cargando.set(true);
    this.pilotos.set([]); 
    this.grilla.set([]);
    this.f1Service.buscarPilotos('').subscribe({
      next: (datos) => {
        const grillaDatos = datos.drivers ? datos.drivers : datos;
        this.grilla.set(grillaDatos);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al cargar la grilla:', err);
        this.cargando.set(false);
      }
    });
  }
}