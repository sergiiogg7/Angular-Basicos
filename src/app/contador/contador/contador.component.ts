import { Component } from '@angular/core';



@Component({
  selector: 'contador-component',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>La base es <strong>{{ base }}</strong></h3>

    <button (click)="acumulador( base )" >{{ base }}</button>

    <span> {{ numero }} </span>

    <button (click)="acumulador( -base )"> -{{ base }}</button>

  `
})

export class ContadorComponent {
    titulo = 'bases';
  base: number = 5;
  numero: number = 10;

  acumulador ( valor: number) {
    this.numero += valor;

  }
}
