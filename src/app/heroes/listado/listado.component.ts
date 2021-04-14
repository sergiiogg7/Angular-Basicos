import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {
  heroes: string[] = ['Thor', 'Capitán América', 'Spiderman'];
  heroeBorrado: string = '';


  borrar(): void {
    console.log("Borrando...")
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
